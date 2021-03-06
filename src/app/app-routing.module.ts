import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './Login/login.component';
import { RegistreerPaginaComponent } from './registreerPagina/registreer.component';
import { VerzoekIndienenComponent } from './verzoekIndienen/verzoekIndienen.component';
import { VerzoekTonenQrComponent } from './verzoek-tonen-qr/verzoek-tonen-qr.component';
import { AanvraagTonenComponent } from './aanvraag-tonen/aanvraag-tonen.component';
import { AanvraagKeurenComponent } from './aanvraag-keuren/aanvraag-keuren.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registreer', component: RegistreerPaginaComponent},
    { path: 'verzoekIndienen', component: VerzoekIndienenComponent},
    { path: 'tonenQr', component: VerzoekTonenQrComponent},
    { path: 'aanvraagTonen', component: AanvraagTonenComponent},
    { path: 'aanvraagkeuren', component: AanvraagKeurenComponent}
    // otherwise redirect to home
];

export const appRoutingModule = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
