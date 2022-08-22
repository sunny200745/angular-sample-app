import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { select, Store } from '@ngrx/store';
import { starWarPeople, starWarPlanets, starWarStarships } from '../state/starwars.selector';
import { init, loadPeople } from '../actions/starwars.actions';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.scss']
})
export class StarWarsComponent implements OnInit {

  starWarPeople$ = this.store.pipe(select(starWarPeople));
  starWarPlanets$ = this.store.select(starWarPlanets);
  starWarStarships$ = this.store.select(starWarStarships);
  constructor(private service: ApiService, private store: Store) { }
  ngOnInit(): void {
    console.log("starWarPeople$", this.starWarPeople$);
  }
  fetchData() {
    console.log('Clicked')
    
    this.store.dispatch(init())

  }
}
