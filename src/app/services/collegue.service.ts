import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Collegue, Avis } from '../model';
import { environment } from '../../environments/environment.prod';

//Environnement URL
const URL_BACKEND = environment.backendUrl;


@Injectable({
providedIn: 'root'
})
export class CollegueService {


  constructor(private _http: HttpClient) { }

  listerCollegues():Promise<Collegue[]>  {
    // récupérer la liste des collègues côté serveur
    return this._http
    .get(URL_BACKEND)
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


  donnerUnAvis(unCollegue:Collegue, avis:Avis):Promise<Collegue>  {
  // TODO Aimer ou Détester un collègue côté serveur
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    
    let avis1:string
    if (avis == Avis.AIMER)
    avis1 = "AIMER";
    if (avis == Avis.DETESTER)
    avis1 = "DETESTER";

    
    return this._http
    .patch(URL_BACKEND + unCollegue.pseudo,

    //corps de la requête
    {
      action : avis
   
    },

    //options de la requête HTTP
      httpOptions
    )
    .toPromise()
    .then((d: any) => {
      const col = new Collegue();
      col.pseudo = d.pseudo;
      col.score = d.score;
      col.photo = d.photo;
       return col;
    });
 
  }

}