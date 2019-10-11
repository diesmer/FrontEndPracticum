import { Component, OnInit } from '@angular/core';

import { AanvraagService } from '../../services/aanvraag.service';

import { Aanvraag } from '../../models/aanvraag';

@Component({
  selector: 'app-toevoegenaanvraag',
  templateUrl: './toevoegenaanvraag.component.html',
  styleUrls: ['./toevoegenaanvraag.component.css']
})
export class ToevoegenaanvraagComponent implements OnInit {

  aanvraag: Aanvraag = {
    datum:'',
    tijd:'',
    status:'behandeling',
    email:'henk@supertenk.com'
  }

  constructor(public aanvraagService: AanvraagService) { }

  ngOnInit() {
  }

  //Toevoegen van een nieuwe collectie aanvraag aan de database
  //Wordt uitgevoerd als de aanvraag gesubmit wordt
  onSubmit() {
    if(this.aanvraag.datum != '' && this.aanvraag.tijd != '' && this.aanvraag.status != '' && this.aanvraag.email != ''){
      this.aanvraagService.addAanvraag(this.aanvraag);
      this.aanvraag.datum = '';
      this.aanvraag.tijd = '';
      this.aanvraag.status = 'behandeling';
      this.aanvraag.email = 'henk@supertenk.com';
    }
  }

}


