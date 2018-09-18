import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collegue } from '../model';

@Injectable({
providedIn: 'root'
})
export class CollegueService {

  constructor(private _http: HttpClient) { }

  listerCollegues():Promise<Collegue[]>  {
    // récupérer la liste des collègues côté serveur
    return this._http
    .get("http://localhost:8080/collegues")
    .toPromise()
    .then((data: any[]) => data.map(d => {
      //Collegue n'a pas de constructeur donc on ne peut pas lui passer 
      //directement les paramètres attendus tel que new Collegue (d.pseudo
      // d.score, d.photo) mais il faut faire un nouvel objet collègue
      //que l'on va retourner :
      const col = new Collegue();
    col.pseudo = d.pseudo;
    col.score = d.score;
    col.photo = d.photo;
     return col;
    }));
  }

/*
  donnerUnAvis(unCollegue:Collegue, avis:Avis):Promise<Collegue>  {
    // TODO Aimer ou Détester un collègue côté serveur
   
  }
  */
}

