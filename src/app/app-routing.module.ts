import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { GoodDealComponent } from './goodDeal/goodDeal.component';

const routes: Routes = [
  {
    path: 'goodDeal-list',
    component: GoodDealComponent,
    data: { title: 'goodDeal List' }
  },
  { path: '',
    redirectTo: '/good-deal-list',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
