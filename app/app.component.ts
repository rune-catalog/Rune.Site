import { Component } from 'angular2/core';
import { RuneToolbarComponent } from './toolbar.component';
import { HTTP_PROVIDERS } from 'angular2/http';

@Component({
  selector: 'rune-app',
  template: '<rune-toolbar></rune-toolbar><h1>App</h1>',
  directives: [RuneToolbarComponent],
  providers: [HTTP_PROVIDERS]
})
export class AppComponent { }
