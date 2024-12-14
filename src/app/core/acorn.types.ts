export interface TSProgram {
  type: string;
  start: number;
  end: number;
  loc: LOC;
  body: TSProgramBody[];
  sourceType: string;
}

export interface TSProgramBody {
  type: string;
  start: number;
  end: number;
  loc: LOC;
  id: IDElement;
  body: IDElement;
}

export interface TypeName {
  type: string;
  start: number;
  end: number;
  loc: LOC;
  left: IDElement;
  right: IDElement;
}

export interface Type {
  type: string;
  start: number;
  end: number;
  loc: LOC;
  typeName?: TypeName;
  typeParameters?: IDElement;
}

export interface PurpleBody {
  type: string;
  start: number;
  end: number;
  loc: LOC;
  computed: boolean;
  key: IDElement;
  typeAnnotation: IDElement;
}

export interface IDElement {
  type: string;
  start: number;
  end: number;
  loc: LOC;
  body?: PurpleBody[];
  name?: string;
  typeAnnotation?: IDElement;
  types?: Type[];
  params?: IDElement[];
  literal?: Literal;
}

export interface LOC {
  start: End;
  end: End;
}

export interface End {
  line: number;
  column: number;
  index: number;
}

export interface Literal {
  type: string;
  start: number;
  end: number;
  loc: LOC;
  value: number | string;
  raw: string;
}
