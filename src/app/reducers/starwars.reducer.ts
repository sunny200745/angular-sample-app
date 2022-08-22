import { Action, createReducer, on } from '@ngrx/store';
import { StarWarsPeople, StarWarsPlanets, StarWarsStarships } from '../api.service';
import { loadPeopleSuccess, loadPlanetsSuccess, loadStarshipsSuccess } from '../actions/starwars.actions';
import { AppState } from '../store/store.models';

export interface RootStarWarState {
  people: StarWarsPeople[];
  planets: StarWarsPlanets[];
  starships: StarWarsStarships[];
}

export const initialState: RootStarWarState = {
  people: [],
  planets: [],
  starships: []
};

export const starwarsReducer = createReducer(
  initialState,
  on(loadPeopleSuccess, (state, { people }) => {
    let x: any = ({
      ...state,
      people
    })
    console.log('x state, people--->', x, state, people)
    return x
  }
  ),

  on(loadPlanetsSuccess, (state, { planets }: any) => ({
    ...state,
    planets
  })),

  on(loadStarshipsSuccess, (state, { starships }: any) => ({
    ...state,
    starships
  })),
);
