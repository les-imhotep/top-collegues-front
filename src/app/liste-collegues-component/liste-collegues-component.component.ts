import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../model';
import { CollegueService } from '../services/collegue.service';
import { Observable } from 'rxjs';
import {catch} from 'rxjs/operators';

@Component({
  selector: 'app-liste-collegues-component',
  templateUrl: './liste-collegues-component.component.html',
  styleUrls: ['./liste-collegues-component.component.css']
})
export class ListeColleguesComponentComponent implements OnInit {
  // on récupère le tableau de collègues du composant

  colleguesTab: Collegue[];

  err: string;

  // on va communiquer avec le service
  constructor(private _colSrv: CollegueService) {}

  ngOnInit() {
    // on passe une promesse avec then :
    // le tableau de collègues récupéré dans le service va alimenter
    // le tableau de collègues du composant
    this._colSrv.listerCollegues()
    .subscribe(
      tableauCols => this.colleguesTab = tableauCols,
      errServeur => {
        if (errServeur.code && errServeur.message) {
          this.err = errServeur.message;
        } else {
          this.err = 'Erreur technique côté serveur';
        }
      }
    );

  }
}
