import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aanvraag-tonen',
  templateUrl: './aanvraag-tonen.component.html',
  styleUrls: ['./aanvraag-tonen.component.css']
})
export class AanvraagTonenComponent implements OnInit {

  status: boolean = true;
  user: string = "Süleyman"

  constructor() { }

  ngOnInit() {
  }

}
