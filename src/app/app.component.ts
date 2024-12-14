import { Component, effect, model } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MonacoComponent } from './monaco/monaco.component';
import { JSONSchema7 } from 'json-schema';
import { SplitterModule } from 'primeng/splitter';
import { parseTS } from './core/acorn';
import { toGolangStruct } from './core/golang';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MonacoComponent, SplitterModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'type-generator';
  sampleInterface = model(`interface User {
  id: string & tags.Format<"uuid">;
  name: string;
  age: number &
    tags.Type<"uint32"> &
    tags.Minimum<20> &
    tags.ExclusiveMaximum<100>;
}`);

  constructor() {
    effect(() => {
      const definition = parseTS(this.sampleInterface());
      const golangStruct = toGolangStruct(definition);
      console.log(definition);
      console.log(golangStruct);
    });
  }
}
