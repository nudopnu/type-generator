import * as acorn from 'acorn';
import tsPlugin from 'acorn-typescript';
import { PurpleBody, TSProgram, TSProgramBody } from './acorn.types';
import {
  BaseType,
  InterfaceDefinition,
  PropertyDefinition,
  Tag,
} from './type-definition.type';
import { IDElementTypeToBaseType } from './type-definition';

export function parseTS(ts: string) {
  const node = acorn.Parser.extend(tsPlugin({ dts: true }) as any).parse(ts, {
    sourceType: 'module',
    ecmaVersion: 'latest',
    locations: true,
  }) as TSProgram;
  console.log('simplified', simplify(node));

  return node.body
    .filter((node) => node.type === 'TSInterfaceDeclaration')
    .map(toInterfaceDefinition)[0];
}

export function simplify(json: any) {
  let result: any = {};
  Object.entries(json).forEach(([key, value]) => {
    if (['end', 'loc', 'start'].indexOf(key) !== -1) {
      return;
    }
    if (typeof value === 'object' && !Array.isArray(value) && value !== null) {
      result[key] = simplify(value);
    } else if (Array.isArray(value)) {
      result[key] = value.map(simplify);
    } else {
      result[key] = value;
    }
  });
  return result;
}

export function toInterfaceDefinition(declaration: TSProgramBody) {
  let interfaceDefinition: InterfaceDefinition = {
    name: declaration.id.name!,
    properties: [],
  };
  declaration.body.body
    ?.filter((node) => node.type === 'TSPropertySignature')
    .forEach((node) => {
      const propertyDefinition = toPropertyDefinition(node);
      interfaceDefinition.properties.push(propertyDefinition);
    });
  return interfaceDefinition;
}

export function toPropertyDefinition(node: PurpleBody) {
  const name = node.key.name!;
  const tags: Tag[] = [];
  let baseTypes: BaseType[] = [];

  if (node.typeAnnotation.typeAnnotation!.type === 'TSIntersectionType') {
    let typeAnnotations = new Map<string, Array<any>>();
    node.typeAnnotation.typeAnnotation!.types!.forEach((x) => {
      const oldValue = typeAnnotations.get(x.type) ?? [];
      typeAnnotations.set(x.type, [...oldValue, x]);
    });
    const typeReferences = typeAnnotations.get('TSTypeReference');
    [...typeAnnotations.keys()]
      .filter((key) => key !== 'TSTypeReference')
      .forEach((key) => {
        if (key in IDElementTypeToBaseType) {
          baseTypes.push(IDElementTypeToBaseType[key]);
        }
      });
    if (typeReferences) {
      typeReferences.forEach((element) => {
        if (element.typeName.left.name === 'tags') {
          const tag: Tag = {
            type: element.typeName.right.name,
          };
          if (element.typeParameters) {
            const raw = element.typeParameters.params[0].literal.raw as string;
            if (raw.startsWith('"') && raw.endsWith('"')) {
              tag.param = raw.slice(1, -1);
            } else {
              tag.param = parseInt(raw);
              if (isNaN(tag.param)) {
                tag.param = parseFloat(raw);
              }
              if (isNaN(tag.param)) {
                tag.param = raw;
              }
            }
          }
          tags.push(tag);
        }
      });
    }
  } else if (
    node.typeAnnotation.typeAnnotation!.type in IDElementTypeToBaseType
  ) {
    baseTypes = [
      IDElementTypeToBaseType[node.typeAnnotation.typeAnnotation!.type],
    ];
  }
  let propertyDefinition: PropertyDefinition = {
    name,
    baseTypes,
    tags,
  };
  return propertyDefinition;
}
