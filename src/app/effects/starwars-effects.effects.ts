import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, exhaustMap, map, mergeMap, tap } from 'rxjs';
import { 
  init,
  loadPeople,  
  loadPeopleSuccess,
  loadPlanets,
  loadPlanetsSuccess, 
  loadStarships, 
  loadStarshipsSuccess
} from '../actions/starwars.actions';
import { ApiService } from '../api.service';


@Injectable()
export class StarwarsEffectsEffects {


  constructor(private actions$: Actions, private service: ApiService) { }

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(init),
      concatMap(() => [
        loadPeople(),
        loadPlanets(),
        loadStarships()
      ])
    )
  )

  loadPeople$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPeople),
      exhaustMap(() =>
        this.service
          .getStarWarsPeople()
          .pipe(map(people => 
            loadPeopleSuccess({people})
          ))
      )
    )
  )

  loadStarships$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPeople),
      exhaustMap(() =>
        this.service
          .getStarWarsStarships()
          .pipe(map(starships => loadStarshipsSuccess({starships})))
      )
    )
  )

  loadPlanets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPeople),
      exhaustMap(() =>
        this.service
          .getStarWarsPlanets()
          .pipe(map(planets => loadPlanetsSuccess({planets})))
      )
    )
  )
}
