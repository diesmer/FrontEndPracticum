import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

import { Persoon } from '../models/persoon';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersoonService {

  //Ophalen van de collectie
  personen: Observable<Persoon[]>;
  personenCollection: AngularFirestoreCollection<Persoon>;

  constructor(public afs: AngularFirestore) { 
    this.personen = this.afs.collection('personen').valueChanges();
    this.personenCollection = this.afs.collection<Persoon>('personen');
  }

  //Getter van de collectie personen
  getPersonen() {
    return this.personen;
  }

  putPersoon(persoon: Persoon){
      this.personenCollection.add(persoon);
      console.log("PERSON_SEnT");
  }
}
