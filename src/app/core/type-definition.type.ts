export interface InterfaceDefinition {
  name: string;
  properties: PropertyDefinition[];
}

export interface PropertyDefinition {
  name: string;
  baseTypes: BaseType[];
  tags: Tag[];
}

export interface Tag {
  type: TagType;
  param?: any;
}

export const BaseTypes = [
  'number',
  'string',
  'boolean',
  'symbol',
  'bigint',
  'literal',
] as const;

export type BaseType = (typeof BaseTypes)[number];

export const TagTypes = [
  'Type',
  'Minimum',
  'Maximum',
  'ExclusiveMinimum',
  'ExclusiveMaximum',
  'MultipleOf',
  'MinLength',
  'MaxLength',
  'Pattern',
  'Format',
  'Minitems',
  'Maxitems',
  'Maxitems',
  'UniqueItems',
] as const;

export type TagType = (typeof TagTypes)[number];

export const FormatTypes = [
  'base64',
  'base64rawurl',
  'base64url',
  'bcp47-language-tag',
  'bic',
  'btc-addr',
  'btc-addr-bech32',
  'byte',
  'credit-card',
  'cron',
  'cve',
  'date',
  'date-time',
  'duration',
  'e164',
  'email',
  'eth-addr',
  'hexadecimal',
  'hexcolor',
  'hostname',
  'hsl',
  'hsla',
  'html',
  'html-encoded',
  'idn-email',
  'idn-hostname',
  'ipv4',
  'ipv6',
  'iri',
  'iri-reference',
  'isbn',
  'isbn10',
  'isbn13',
  'iso3166-1-alpha-numeric',
  'iso3166-1-alpha2',
  'iso3166-1-alpha3',
  'iso3166-2',
  'iso4217',
  'issn',
  'json',
  'json-pointer',
  'jwt',
  'latitude',
  'longitude',
  'luhn-checksum',
  'md4',
  'md5',
  'mongodb',
  'mongodb-connection-string',
  'password',
  'postcode-iso3166-alpha2',
  'postcode-iso3166-alpha2-field',
  'regex',
  'relative-json-pointer',
  'rgb',
  'rgba',
  'ripemd128',
  'ripemd160',
  'semver',
  'sha256',
  'sha384',
  'sha512',
  'spicedb',
  'ssn',
  'tiger128',
  'tiger160',
  'tiger192',
  'time',
  'timezone',
  'ulid',
  'uri',
  'uri-reference',
  'uri-template',
  'url',
  'uuid',
  'uuid-rfc4122',
  'uuid3',
  'uuid3-rfc4122',
  'uuid4',
  'uuid4-rfc4122',
  'uuid5',
  'uuid5-rfc4122',
] as const;

export type FormatType = (typeof FormatTypes)[number];
