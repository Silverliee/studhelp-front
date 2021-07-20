import { Component } from '@angular/core';
import { GoodDealService } from '../goodDeal.service';

@Component({
  selector: 'app-goodDealPage',
  templateUrl: './goodDealPage.component.html',
  styleUrls: ['./goodDealPage.component.css']

})
export class GoodDealPageComponent {


  isFilmSelected:boolean = false;

  isFilmSelectedRented:boolean = false;

  idFilmSelected: string[] = []

  constructor(public filmService: GoodDealService){}

  ngOnInit(){
    this.filmService.getSelectionUpdatedListener().subscribe( (listId) => this.changeSelection(listId));
  }

  changeSelection(listId: string[]){
    this.idFilmSelected = listId;
    if(this.idFilmSelected.length == 0){
      this.isFilmSelected = false;
      this.isFilmSelectedRented = false;
    }
    else{
      this.isFilmSelected = true;
    }
  }
}
