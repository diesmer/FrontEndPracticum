import { Component, OnInit } from '@angular/core';

import { AanvraagService } from '../../services/aanvraag.service';

import { Aanvraag } from '../../models/aanvraag';

@Component({
  selector: 'app-tekeurenaanvragen',
  templateUrl: './tekeurenaanvragen.component.html',
  styleUrls: ['./tekeurenaanvragen.component.css']
})
export class TekeurenaanvragenComponent implements OnInit {

  aanvragen: Aanvraag[];

  constructor(public aanvraagService: AanvraagService) { }

  ngOnInit() {
    this.aanvraagService.getAanvragen().subscribe(aanvragen => {
      this.aanvragen = aanvragen;
    });

  }

  //Aanvraag goedkeuren
  updateAanvraag(aanvraagid) {
    this.aanvraagService.updateAanvraag(aanvraagid);
  }

  //Aanvraag afkeuren
  updateAanvraagAfkeuren(aanvraagid) {
    this.aanvraagService.updateAanvraagAfkeuren(aanvraagid);
  }

}


