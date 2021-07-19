import {GoodDeal} from './goodDeal.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})
export class GoodDealService {
  private goodDeal: GoodDeal[] = [];
  private goodDealUpdated = new Subject<GoodDeal[]>();
  private searchUpdated = new Subject<Event>();
  private selectionUpdated = new Subject<string[]>();
  private onlyGoodDealGet = new Subject<GoodDeal>();


  constructor(private http: HttpClient) {
  }

  getGoodDeals() {
    this.http.get<GoodDeal[]>('http://localhost:3000/gooddeals/').subscribe(
      (GoodDealData) => {
        this.goodDeal = GoodDealData;
        this.goodDealUpdated.next([...this.goodDeal]);
      }
    )
  }

  getGoodDeal(id: string) {
    this.http.get<GoodDeal>('http://localhost:3000/gooddeals/' + id).subscribe(
      (goodDeal) => {
        this.onlyGoodDealGet.next(goodDeal);
      }
    );
  }

  putGoodDeal(goodDeal: GoodDeal) {
    this.http.put<GoodDeal>('http://localhost:3000/gooddeals/' + goodDeal._id, goodDeal);
  }

  delGoodDeal(id: string) {
    this.http.delete<GoodDeal>('http://localhost:3000/gooddeals/' + id);
  }

  get events$() {
    return this.searchUpdated.asObservable();
  }

  getGoodDealUpdatedListener() {
    return this.goodDealUpdated.asObservable();
  }

  addGoodDeal(goodDeal: { title: String, description: String, startDate: String, endDate: String, address: String }) {
    this.http.post<{ title: String, description: String, startDate: String, endDate: String, address: String }>('http://localhost:3000/gooddeals/', goodDeal);
  }

  updateFilter(event: Event) {
    this.searchUpdated.next(event);
  }

  updateSelection(idSelection: string[]) {
    this.selectionUpdated.next(idSelection);
  }

  getSelectionUpdatedListener() {
    return this.selectionUpdated.asObservable();
  }

  getOnlyGoodDealGetListenert() {
    return this.onlyGoodDealGet.asObservable();
  }


}
