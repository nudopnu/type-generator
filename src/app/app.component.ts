import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MonacoComponent } from "./monaco/monaco.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MonacoComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'type-generator';
}
