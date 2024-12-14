import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import {
  AfterViewInit,
  Component,
  effect,
  ElementRef,
  input,
  model,
  viewChild,
} from '@angular/core';

let tmp = true;

@Component({
  selector: 'app-monaco',
  standalone: true,
  imports: [],
  template: `<div style="height:100%; width: 100%;" #editorContainer></div>`,
})
export class MonacoComponent implements AfterViewInit {
  editorContainer =
    viewChild.required<ElementRef<HTMLElement>>('editorContainer');
  language = input('typescript');
  readOnly = input(false);
  code = model('');
  editor?: monaco.editor.IStandaloneCodeEditor;

  constructor() {
    effect(() => {
      const code = this.code();
      if (!this.editor || this.editor.getModel()?.getValue() === code) {
        return;
      }
      this.editor.getModel()?.setValue(code);
    });
  }

  ngAfterViewInit(): void {
    this.editorContainer().nativeElement.parentElement!.style.display =
      'contents';
    // validation settings
    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: true,
      noSyntaxValidation: false,
    });

    // compiler options
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ES2015,
      allowNonTsExtensions: true,
    });

    // extra libraries
    const libSource = `declare module tags {
  /**
   * Represents a specific numeric type.
   * @template T - The type of numeric value, such as 'int32', 'uint64', or 'double'.
   */
  type Type<
    T extends 'int8' | 'int16' | 'int32' | 'int64' | 'uint8' | 'uint16' | 'uint32' | 'uint64' | 'float32' | 'float64'
  > = {
    __type?: T;
  };

  /**
   * Specifies the minimum allowable value for a number.
   * @template N - The minimum value.
   */
  type Minimum<N extends number> = {
    __min?: N;
  };

  /**
   * Specifies the maximum allowable value for a number.
   * @template N - The maximum value.
   */
  type Maximum<N extends number> = {
    __max?: N;
  };

  /**
   * Specifies an exclusive minimum value for a number.
   * Numbers must be strictly greater than this value.
   * @template N - The exclusive minimum value.
   */
  type ExclusiveMinimum<N extends number> = {
    __min?: N;
  };

  /**
   * Specifies an exclusive maximum value for a number.
   * Numbers must be strictly less than this value.
   * @template N - The exclusive maximum value.
   */
  type ExclusiveMaximum<N extends number> = {
    __exclusiveMax?: N;
  };

  /**
   * Constrains a number to be a multiple of the specified base.
   * Useful for ensuring divisibility.
   * @template N - The base multiple.
   */
  type MultipleOf<N extends number> = {
    __base?: N;
  };

  /**
   * Specifies the minimum length for a string.
   * @template N - The minimum length.
   */
  type MinLength<N extends number> = {
    __minlen: N;
  };

  /**
   * Specifies the maximum length for a string.
   * @template N - The maximum length.
   */
  type MaxLength<N extends number> = {
    __maxlen: N;
  };

  /**
   * Specifies a regular expression pattern that the string must match.
   * @template S - The regex pattern.
   */
  type Pattern<S extends RegExp> = {
    __pattern: S;
  };

  /**
   * Specifies a predefined format that the string must adhere to.
   * Common formats include dates, email addresses, and UUIDs.
   * @template T - The name of the format.
   */
  type Format<
    T extends
      | 'base64'
      | 'base64rawurl'
      | 'base64url'
      | 'bcp47-language-tag'
      | 'bic'
      | 'btc-addr'
      | 'btc-addr-bech32'
      | 'byte'
      | 'credit-card'
      | 'cron'
      | 'cve'
      | 'date'
      | 'date-time'
      | 'duration'
      | 'e164'
      | 'email'
      | 'eth-addr'
      | 'hexadecimal'
      | 'hexcolor'
      | 'hostname'
      | 'hsl'
      | 'hsla'
      | 'html'
      | 'html-encoded'
      | 'idn-email'
      | 'idn-hostname'
      | 'ipv4'
      | 'ipv6'
      | 'iri'
      | 'iri-reference'
      | 'isbn'
      | 'isbn10'
      | 'isbn13'
      | 'iso3166-1-alpha-numeric'
      | 'iso3166-1-alpha2'
      | 'iso3166-1-alpha3'
      | 'iso3166-2'
      | 'iso4217'
      | 'issn'
      | 'json'
      | 'json-pointer'
      | 'jwt'
      | 'latitude'
      | 'longitude'
      | 'luhn-checksum'
      | 'md4'
      | 'md5'
      | 'mongodb'
      | 'mongodb-connection-string'
      | 'password'
      | 'postcode-iso3166-alpha2'
      | 'postcode-iso3166-alpha2-field'
      | 'regex'
      | 'relative-json-pointer'
      | 'rgb'
      | 'rgba'
      | 'ripemd128'
      | 'ripemd160'
      | 'semver'
      | 'sha256'
      | 'sha384'
      | 'sha512'
      | 'spicedb'
      | 'ssn'
      | 'tiger128'
      | 'tiger160'
      | 'tiger192'
      | 'time'
      | 'timezone'
      | 'ulid'
      | 'uri'
      | 'uri-reference'
      | 'uri-template'
      | 'url'
      | 'uuid'
      | 'uuid-rfc4122'
      | 'uuid3'
      | 'uuid3-rfc4122'
      | 'uuid4'
      | 'uuid4-rfc4122'
      | 'uuid5'
      | 'uuid5-rfc4122'
  > = {
    __format?: T;
  };

  /**
   * Specifies the minimum number of items allowed in an array.
   * @template N - The minimum number of items.
   */
  type Minitems<N extends number> = {
    __minItems: N;
  };

  /**
   * Specifies the maximum number of items allowed in an array.
   * @template N - The maximum number of items.
   */
  type Maxitems<N extends number> = {
    __maxItems: N;
  };

  /**
   * Specifies the maximum number of items allowed in an array.
   * @template N - The maximum number of items.
   */
  type Maxitems<N extends number> = {
    __maxItems: N;
  };

  /**
   * Enforces that all items in the array must be unique.
   */
  type UniqueItems = {
    __unique: true;
  };
}
`;
    var libUri = 'ts:filename/facts.d.ts';
    monaco.languages.typescript.javascriptDefaults.addExtraLib(
      libSource,
      libUri
    );
    // When resolving definitions and references, the editor will try to use created models.
    // Creating a model for the library allows "peek definition/references" commands to work with the library.
    if (tmp) {
      monaco.editor.createModel(
        libSource,
        'typescript',
        monaco.Uri.parse(libUri)
      );
      tmp = !tmp;
    }

    this.editor = monaco.editor.create(this.editorContainer().nativeElement, {
      value: this.code(),
      theme: 'vs-dark',
      wordWrap: 'on',
      wrappingIndent: 'indent',
      language: this.language(),
      readOnly: this.readOnly(),
      automaticLayout: true,
    });
    this.editor.onDidChangeModelContent((_) => {
      console.log('CHANGE');
      this.code.set(this.editor!.getModel()!.getValue());
    });
  }
}
