import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { AfterViewInit, Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-monaco',
  standalone: true,
  imports: [],
  template: `<div style="height:100%; width: 100%;" #editorContainer></div>`,
})
export class MonacoComponent implements AfterViewInit {
  editorContainer =
    viewChild.required<ElementRef<HTMLElement>>('editorContainer');

  ngAfterViewInit(): void {
    this.editorContainer().nativeElement.parentElement!.style.display = "contents";
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
    var libSource = [
      'declare class Facts {',
      '    /**',
      '     * Returns the next fact',
      '     */',
      '    static next():string',
      '}',
    ].join('\n');
    var libUri = 'ts:filename/facts.d.ts';
    monaco.languages.typescript.javascriptDefaults.addExtraLib(
      libSource,
      libUri
    );
    // When resolving definitions and references, the editor will try to use created models.
    // Creating a model for the library allows "peek definition/references" commands to work with the library.
    // monaco.editor.createModel(
    //   libSource,
    //   'typescript',
    //   monaco.Uri.parse(libUri)
    // );

    var jsCode = [
      '"use strict";',
      '',
      'class Chuck {',
      '    greet() {',
      '        return Facts.next();',
      '    }',
      '}',
    ].join('\n');

    monaco.editor.create(this.editorContainer().nativeElement, {
      value: jsCode,
      theme: 'vs-dark',
      wordWrap: 'on',
      wrappingIndent: 'indent',
      language: 'typescript',
      automaticLayout: true,
    });
  }
}
