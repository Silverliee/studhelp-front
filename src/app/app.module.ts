import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {FooterComponent} from './footer/footer.component';
import {ConnectionComponent} from './connection/connection.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {FormsModule} from "@angular/forms";
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {path: 'connection-component', component: ConnectionComponent},
  {path: 'inscription-component', component: InscriptionComponent},//ajouter canActivate: [AuthGuard] pour les page a acces restreint
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ConnectionComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
