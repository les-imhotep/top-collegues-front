export enum Avis {AIMER, DETESTER};

export class Collegue {

    pseudo:string
    score:number
    photo:string

}

//Création d'une structure vote
export class Vote {
   
    coll:Collegue
    avis:Avis

}
