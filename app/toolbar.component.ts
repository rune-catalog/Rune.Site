import { Component } from 'angular2/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'rune-toolbar',
  template: `<ul><li><a (click)="authenticate()">Log In</a></li></ul>`,
  providers: [AuthService]
})
export class RuneToolbarComponent {

  constructor(private authService: AuthService) { }

  authenticate(): void {
    this.authService.auth('sam', 'Password1$')
      .subscribe(token => console.log('TOKEN!', token));
  }
}
