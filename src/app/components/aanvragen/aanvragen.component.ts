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

  editState: boolean = true;
  aanvraagToEdit: Aanvraag;

  constructor(public aanvraagService: AanvraagService) { }

  ngOnInit() {
    //Aanvragen ophalen
    this.aanvraagService.getAanvragen().subscribe(aanvragen => {
      this.aanvragen = aanvragen;
    });

  }
}
