import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {FooterComponent} from './footer/footer.component';
import {ConnectionComponent} from './connection/connection.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {AuthGuard} from './auth.guard';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {GoodDealListAdminComponent} from "./goodDeal/goodDealListAdmin/goodDealListAdmin.component";
import {GoodDealPageComponent} from "./goodDeal/goodDealPage/goodDealPage.component";
import {GoodDealComponent} from "./goodDeal/goodDeal.component";
import {GoodDealSearchbarComponent} from "./goodDeal/goodDealSearchbar/goodDealSearchbar.component";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatTableModule} from "@angular/material/table";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSortModule} from "@angular/material/sort";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'connection', component: ConnectionComponent},
  {path: 'inscription', component: InscriptionComponent},//ajouter canActivate: [AuthGuard] pour les page a acces restreint
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ConnectionComponent,
    InscriptionComponent,
    HomeComponent,
    GoodDealListAdminComponent,
    GoodDealPageComponent,
    GoodDealComponent,
    GoodDealSearchbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTableModule,
    MatAutocompleteModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    HttpClientModule,
    MatCheckboxModule,
    MatSortModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule

  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
