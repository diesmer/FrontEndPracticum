import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login.component';
import { RegistreerPaginaComponent } from './registreerPagina/registreer.component';
import { VerzoekIndienenComponent } from './verzoekIndienen/verzoekIndienen.component';

import { MainNavComponent } from './main-nav/main-nav.component';
import { VerzoekTonenQrComponent } from './verzoek-tonen-qr/verzoek-tonen-qr.component';
import { AanvraagTonenComponent } from './aanvraag-tonen/aanvraag-tonen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainNavComponent,
    VerzoekIndienenComponent,
    RegistreerPaginaComponent,
    VerzoekTonenQrComponent,
    AanvraagTonenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
