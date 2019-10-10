import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verzoek-tonen-qr',
  templateUrl: './verzoek-tonen-qr.component.html',
  styleUrls: ['./verzoek-tonen-qr.component.css']
})
export class VerzoekTonenQrComponent implements OnInit {

  status: boolean = true;
  user: string = "Süleyman"

  constructor() { }

  ngOnInit() {
  }

}
