import { Component, OnInit } from '@angular/core';

import { PersoonService } from '../../services/persoon.service';

import { Persoon } from '../../models/Persoon';

@Component({
  selector: 'app-personen',
  templateUrl: './personen.component.html',
  styleUrls: ['./personen.component.css']
})
export class PersoonComponent implements OnInit {

  personen: Persoon[];

  constructor(public persoonService: PersoonService) { }

  //Ophalen van alle personen
  ngOnInit() {
    this.persoonService.getPersonen().subscribe(personen => {
      this.personen = personen;
      console.log(personen);
      console.log(this.personen);
    });

  }

}
