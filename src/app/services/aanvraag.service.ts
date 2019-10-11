import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

import { Aanvraag } from '../models/aanvraag';

import { Observable } from 'rxjs';
import { getMatAutocompleteMissingPanelError } from '@angular/material';

import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class AanvraagService {

  //Collectie uit firestore ophalen
  aanvragen: Observable<Aanvraag[]>;
  aanvraagDoc: AngularFirestoreDocument<Aanvraag>;
  aanvragenCollection: AngularFirestoreCollection<Aanvraag>;

  //Constructor voor het ophalen van de collectie
  constructor(public afs: AngularFirestore) { 
    
    this.aanvragenCollection = afs.collection<Aanvraag>('aanvragen');0

    this.aanvragen = this.aanvragenCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Aanvraag;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  //Service voor het ophalen van alle aanvragen
  getAanvragen() {
    return this.aanvragen;
  }

  //Service voor het toevoegen van een aanvraag
  addAanvraag(aanvraag : Aanvraag) {
    this.aanvragenCollection.add(aanvraag)
  }

  //Service voor het goedkeuren van een aanvraag
  updateAanvraag(aanvraagid) {
    return this.afs.collection('aanvragen').doc(aanvraagid).set({ status:'Goedgekeurd'}, { merge: true });
  }

  //Service voor het afkeuren van een aanvraag
  updateAanvraagAfkeuren(aanvraagid) {
    return this.afs.collection('aanvragen').doc(aanvraagid).set({ status:'Afgekeurd'}, { merge: true });
  }

}

