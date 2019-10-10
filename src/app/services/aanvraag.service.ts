import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

import { Aanvraag } from '../models/aanvraag';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AanvraagService {

  aanvragen: Observable<Aanvraag[]>;

  aanvragenCollection: AngularFirestoreCollection<Aanvraag>;

  constructor(public afs: AngularFirestore) { 
    this.aanvragen = this.afs.collection('aanvragen').valueChanges()
  }

  getAanvragen() {
    return this.aanvragen;
  }
}
