import { Component } from '@angular/core';

import { HelloElement } from './hello-element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-lit';
}
