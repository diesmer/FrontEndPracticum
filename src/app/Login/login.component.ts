import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

import { PersoonService } from '../services/persoon.service';

import { Persoon } from '../models/persoon';
import { Router } from '@angular/router';

@Component({ 
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
 })
export class LoginComponent implements  OnInit{

    personen: Persoon[];
    email: string;
    password: string;
    errorM: boolean;

    constructor(public persoonService: PersoonService, private router: Router) {}

    ngOnInit() {
        this.persoonService.getPersonen().subscribe(data => {
            this.personen = data;
            console.log("DATA" + data);
        });
    }

    checkLogIn(){
        console.log("PERSONEN: " + this.personen);
        this.personen.forEach(persoon => {
            console.log(this.email);
            console.log(this.password);
            if(persoon.email == this.email && persoon.password == this.password){
                console.log("ingelogd")
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