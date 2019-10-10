import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aanvraag-keuren',
  templateUrl: './aanvraag-keuren.component.html',
  styleUrls: ['./aanvraag-keuren.component.css']
})
export class AanvraagKeurenComponent implements OnInit {

  user: string = "Alex";
  keuren: boolean = true;
  
  constructor() { };
  
  students;

  ngOnInit() {

    this.students = [{
      email: 'Suleyman.altindag@student.hu.nl',
      datum: '10/10/2019',
      tijd: '10:10',
      status: true,
      isGoedGekeurd: ""
    }, {
      email: 'Safak.inan@student.hu.nl',
      datum: '11/6/2019',
      tijd: '11:11',
      status: true,
      isGoedGekeurd: ""
    }, {  
      email: 'Serhat.altindag@student.hu.nl',
      datum: '16/12/2019',
      tijd: '15:30',
      status: true,
      isGoedGekeurd: ""
      }];
  }

  buttonclick(index){

    index.status = false;
    index.isGoedGekeurd = "goed gekeurd";
    console.log(index);
    
  }

  afkeuren(index){
    index.status = false;
    index.isGoedGekeurd = "afgekeurd";
    console.log(index);
  }

}
