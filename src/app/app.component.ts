import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<button (click)="clicAime()">Clic</button>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bonjour-angular';

  masquerSection=true;


}
