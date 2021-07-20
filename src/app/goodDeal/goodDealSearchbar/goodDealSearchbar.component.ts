import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup,} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { GoodDealService } from '../goodDeal.service';

export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

/**
 * @title Option groups autocomplete
 */
@Component({
  selector: 'app-goodDeal-searchbar',
  templateUrl: './goodDealSearchbar.component.html',
  styleUrls: ['./goodDealSearchbar.component.css']
})

export class GoodDealSearchbarComponent implements OnInit {
  stateForm: FormGroup = this._formBuilder.group({
    stateGroup: '',
  });

  stateGroups: StateGroup[] = [{
    letter: 'F',
    names: ['ForrestGump']
  }, {
    letter: 'W',
    names: ['Winnie The Poo',]
  }];

  stateGroupOptions: Observable<StateGroup[]> | undefined;

  constructor(private _formBuilder: FormBuilder, private serviceFilter: GoodDealService) {}

  ngOnInit() {
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }

  applyFilter(event: Event) {
    this.serviceFilter.updateFilter(event);
  }
}
