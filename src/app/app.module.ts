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
import { AanvraagKeurenComponent } from './aanvraag-keuren/aanvraag-keuren.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AanvragenComponent } from './components/aanvragen/aanvragen.component';
import { AanvraagService } from './services/aanvraag.service';
import { PersoonService } from './services/persoon.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainNavComponent,
    VerzoekIndienenComponent,
    RegistreerPaginaComponent,
    VerzoekTonenQrComponent,
    AanvraagTonenComponent,
    AanvraagKeurenComponent,
    AanvragenComponent,
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
    MatListModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'aanvraag-list-app'),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
  ],
  providers: [AanvraagService, PersoonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
