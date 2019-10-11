import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

import { PersoonService } from '../services/persoon.service';

import { Persoon } from '../models/persoon';
import { Router } from '@angular/router';
import { JAN } from '@angular/material';

@Component({ 
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
 })
export class LoginComponent implements  OnInit{

    //Attributen verzameling van de collectie
    personen: Persoon[];
    email: string;
    password: string;
    errorM: boolean;

    constructor(public persoonService: PersoonService, private router: Router) {}

    //Ophalen van personen
    ngOnInit() {
        this.persoonService.getPersonen().subscribe(data => {
            this.personen = data;
            console.log("DATA" + data);
        });
    }

    //Login verrificatie
    checkLogIn(){
        console.log("PERSONEN: " + this.personen);
        this.personen.forEach(persoon => {
            console.log(this.email);
            console.log(this.password);
            //Vaste docent
            if (this.email == 'alex@hu.nl' && this.password == '123') {
                sessionStorage.setItem('rol', '1');
                sessionStorage.setItem('email', this.email);
                this.router.navigate(["/aanvraagTonen"]);
            }
            //Test student
            if (this.email == 'jan@hu.nl' && this.password == '123') {
                sessionStorage.setItem('rol', '2');
                sessionStorage.setItem('email', this.email);
                this.router.navigate(["/tonenQr"]);
            }
            //Controlleert aan de hand van database
            else if(persoon.email == this.email && persoon.password == this.password){
                console.log("ingelogd")
                sessionStorage.setItem('rol', '2');
                sessionStorage.setItem('email', this.email);
                this.router.navigate(["/aanvraagTonen"]);
            }else{
                this.email = "";
                this.password = "";
                this.errorM = true;
            }
        });
    }

}