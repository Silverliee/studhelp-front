import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { GoodDealShowCard } from './goodDealShowCard.model';
import {MatSort} from '@angular/material/sort';
import { GoodDeal } from '../goodDeal.model';
import { GoodDealService } from '../goodDeal.service';
import {SelectionModel} from '@angular/cdk/collections';

let ELEMENT_DATA: GoodDealShowCard[] = [];

@Component({
  selector: 'app-goodDealListAdmin',
  templateUrl: './goodDealListAdmin.component.html',
  styleUrls: ['./goodDealListAdmin.component.css']
})
export class GoodDealListAdminComponent implements OnInit, OnDestroy{
  displayedColumns: string[] = ['select', 'id', 'titre','description', 'startDate', 'endDate', 'address'];
  dataSource : any;
  selection = new SelectionModel<GoodDealShowCard>(false, []);
  finish: boolean = false;
  goodDeals: GoodDeal[] = [];
  goodDealShowCards: GoodDealShowCard[] = [];
  private goodDealsSub : any;

  @ViewChild(MatSort, {static: true}) sort: MatSort | undefined;

  constructor(public goodDealService: GoodDealService){
  }

  ngOnInit(){
    this.goodDealService.getGoodDeals();
    this.goodDealsSub = this.goodDealService.getGoodDealUpdatedListener().subscribe((goodDeals: GoodDeal[]) =>{
      this.goodDeals = goodDeals; this.createTabGoodDealCard();
      this.goodDealService.events$.forEach(event => this.applyFilter(event));
      this.dataSource.sort = this.sort;});
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  createTabGoodDealCard(){
  }


  masterToggle() {

  }

  checkboxLabel(row?: GoodDealShowCard) {}


  ngOnDestroy(){
    this.goodDealsSub.unsubscribe();
  }


  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  ajoutGoodDeal(){
    this.goodDealService.addGoodDeal({title:"", description:'', startDate:"", endDate:'', address:''});
  }

  openDialog(){

  }

}
