import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MonacoComponent } from './monaco/monaco.component';
import { JSONSchema7 } from 'json-schema';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MonacoComponent],
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
