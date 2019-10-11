import { Component, DoCheck } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements DoCheck {

  //Belangrijke variabele om te kijken wat voor iemand ingelogd is
  benis: string;

  //Functie bij bovenstaande variabele
  ngDoCheck() {
    this.benis = sessionStorage.getItem('rol');
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
  
  //Uitloggen
  logUit(){
    sessionStorage.clear();
  }

}
