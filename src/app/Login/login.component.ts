import { Component, OnInit } from '@angular/core';

import { PersoonService } from '../services/persoon.service';

import { Persoon } from '../models/persoon';

@Component({ 
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
 })
export class LoginComponent implements OnInit {

    personen: Persoon[];

    constructor(public persoonService: PersoonService) {}

    ngOnInit() {

        this.persoonService.getPersonen().subscribe(personen => {
            this.personen = personen;
        });
    }
}