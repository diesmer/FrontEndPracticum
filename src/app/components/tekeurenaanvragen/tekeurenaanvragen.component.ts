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

  // goedkeuren(goedkeuring) {
  //   console.log('1');
  //   this.aanvraagService.updateGoedAanvraag(goedkeuring);
  //   console.log('2');
  // }

}


