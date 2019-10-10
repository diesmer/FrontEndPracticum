import { Component, OnInit } from '@angular/core';

import { AanvraagService } from '../../services/aanvraag.service';

import { Aanvraag } from '../../models/aanvraag';

@Component({
  selector: 'app-aanvragen',
  templateUrl: './aanvragen.component.html',
  styleUrls: ['./aanvragen.component.css']
})
export class AanvragenComponent implements OnInit {

  aanvragen: Aanvraag[];

  constructor(public aanvraagService: AanvraagService) { }

  ngOnInit() {

    this.aanvraagService.getAanvragen().subscribe(aanvragen => {
      this.aanvragen = aanvragen;
    });

  }

}
