import { BaseType } from './type-definition.type';

export const IDElementTypeToBaseType: Record<string, BaseType> = {
  TSStringKeyword: 'string',
  TSNumberKeyword: 'number',
  TSSymbolKeyword: 'number',
};
