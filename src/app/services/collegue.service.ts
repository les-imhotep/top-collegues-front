import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Collegue, Avis } from '../model';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

// Environnement URL
const URL_BACKEND_COLLEGUES = environment.backendUrl;

@Injectable({
  providedIn: 'root'
})
export class CollegueService {
  private _superBus = new Subject<string>();

  get superBus(): Observable<string> {
    return this._superBus.asObservable();
  }

  constructor(private _http: HttpClient) {}

  listerCollegues(): Observable<Collegue[]> {
    // récupérer la liste des collègues côté serveur
    return this._http
      .get(URL_BACKEND_COLLEGUES)
      .pipe(
        map((data: any[]) =>
          data.map(collegueServeur =>
            Collegue.fromCollegueServeur(collegueServeur)
          )
        )
      );
  }

  donnerUnAvis(unCollegue: Collegue, avis: Avis): Promise<Collegue> {
    this._superBus.next(`Super : ${unCollegue.pseudo} - ${avis} `);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this._http
      .patch(
        `${URL_BACKEND_COLLEGUES}/${unCollegue.pseudo}`,

        // corps de la requête
        {
          action: avis
        },

        // options de la requête HTTP
        httpOptions
      )
      .toPromise()
      .then((collegueServeur: any) =>
        Collegue.fromCollegueServeur(collegueServeur)
      );
  }
}
