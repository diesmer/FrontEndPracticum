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

  aanvragen: Observable<Aanvraag[]>;

  aanvragenCollection: AngularFirestoreCollection<Aanvraag>;

  constructor(public afs: AngularFirestore) { 
    
    this.aanvragenCollection = afs.collection<Aanvraag>('aanvragen');
    
    //this.aanvragen = this.afs.collection('aanvragen').valueChanges();

    this.aanvragen = this.aanvragenCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Aanvraag;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getAanvragen() {
    return this.aanvragen;
  }

  
  addAanvraag(aanvraag : Aanvraag) {
    this.aanvragenCollection.add(aanvraag)
  }

}

