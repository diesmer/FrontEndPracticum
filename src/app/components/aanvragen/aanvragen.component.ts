import { Component, OnInit } from '@angular/core';

import { AanvraagService } from '../../services/aanvraag.service';

import { Aanvraag } from '../../models/aanvraag';
import { AbstractEmitterVisitor } from '@angular/compiler/src/output/abstract_emitter';

@Component({
  selector: 'app-aanvragen',
  templateUrl: './aanvragen.component.html',
  styleUrls: ['./aanvragen.component.css']
})
export class AanvragenComponent implements OnInit {

  aanvragen: Aanvraag[];

  //Ingelogde user
  user=sessionStorage.getItem('email');

  //Voorhet vaststellen van de state, nodig voor updaten
  editState: boolean = true;
  aanvraagToEdit: Aanvraag;

  constructor(public aanvraagService: AanvraagService) { }

  ngOnInit() {
    //Aanvragen ophalen
    this.aanvraagService.getAanvragen().subscribe(aanvragen => {
      this.aanvragen = aanvragen;
      console.log(this.aanvragen);
    });

  }
}
