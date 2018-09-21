import { Component } from '@angular/core';

class Demo {
  saisie: string;
  commentaire: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bonjour-angular';

  masquerSection = true;

  demo = new Demo();

  clic() {
    console.log(this.demo);
  }
}
