import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

import { Persoon } from '../models/persoon';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersoonService {

  personen: Observable<Persoon[]>;

  aanvragenCollection: AngularFirestoreCollection<Persoon>;

  constructor(public afs: AngularFirestore) { 
    this.personen = this.afs.collection('persoon').valueChanges()
  }

  getAanvragen() {
    return this.personen;
  }
}
