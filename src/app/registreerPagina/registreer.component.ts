import { Component } from '@angular/core';
import { Persoon } from '../models/persoon';
import { PersoonService } from '../services/persoon.service';
import { Router } from '@angular/router';

@Component({ 
    selector: 'registreer',
    templateUrl: 'registreer.component.html',
    styleUrls: ['./registreer.component.css']
 })


export class RegistreerPaginaComponent {

    personen: Persoon[];
    email: string;
    password: string;
    rol : string;
    errorM: boolean;
    benis: Persoon;

    constructor(public persoonService: PersoonService, private router: Router) {}

    ngOnInit() {
    }

    checkLogIn(){
            console.log(this.email);
            console.log(this.password);
            if(this.email != null &&  this.password != null){
                this.benis = {
                    email: this.email, 
                    password: this.password,
                    rol: 'student'
                }
                this.persoonService.putPersoon(this.benis);
                this.router.navigate(["/login"]);
            }else{
                this.email = "";
                this.password = "";
                this.errorM = true;
            }
        };
    }

