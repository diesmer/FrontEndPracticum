import { Component, OnInit } from '@angular/core';
import { AanvraagService } from 'src/app/services/aanvraag.service';
import { Aanvraag } from 'src/app/models/aanvraag';

@Component({
  selector: 'app-aanvraagqr',
  templateUrl: './aanvraagqr.component.html',
  styleUrls: ['./aanvraagqr.component.css']
})
export class AanvraagqrComponent implements OnInit {

  //Ingelogde user
  user=sessionStorage.getItem('email');

  aanvragen: Aanvraag[];

  constructor(public aanvraagService: AanvraagService) { }

  ngOnInit() {
    //Aanvragen ophalen
    this.aanvraagService.getAanvragen().subscribe(aanvragen => {
      this.aanvragen = aanvragen;
    });
  }

}
