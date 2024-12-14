import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MonacoComponent } from './monaco/monaco.component';
import { JSONSchema7 } from 'json-schema';
import { SplitterModule } from 'primeng/splitter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MonacoComponent, SplitterModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'type-generator';
  constructor() {
    const schema: JSONSchema7 = {
      type: 'object',
      properties: {
        test: {
          type: 'string',
        },
      },
    };
  }
}
