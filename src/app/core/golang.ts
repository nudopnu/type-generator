import { tagToValidation } from './golang.types';
import {
  InterfaceDefinition,
  PropertyDefinition,
} from './type-definition.type';
import { capitalize } from './utils';

export function toGolangStruct(interfaceDefinition: InterfaceDefinition) {
  let result = `type ${capitalize(interfaceDefinition.name)} struct {\n`;
  let nameLen = Math.max(
    ...interfaceDefinition.properties.map((property) => property.name.length)
  );

  let partialPropertyDefinitions: {
    partial: string;
    property: PropertyDefinition;
  }[] = [];

  /* propertyName propertyType */
  interfaceDefinition.properties.forEach((property) => {
    let type = property.baseTypes[0];
    const typeTag = property.tags.filter((tag) => tag.type === 'Type')[0];
    if (typeTag && typeTag.param) {
      type = typeTag.param;
    }
    let partial = `\t${capitalize(property.name).padEnd(nameLen)} ${type}`;
    partialPropertyDefinitions.push({ partial, property });
  });

  /* tags */
  const partialLen = Math.max(
    ...partialPropertyDefinitions.map(({ partial }) => partial.length)
  );
  partialPropertyDefinitions.forEach(({ partial, property }) => {
    result += `${partial.padEnd(partialLen)} \`json:"${property.name}"`;
    const validations = property.tags
      .map(tagToValidation)
      .filter((validation) => validation !== '');
    if (validations.length > 0) {
      result += ` validate:"${validations.join(",")}"`;
    }
    result += '`\n';
  });

  result += '}\n';
  return result;
}
