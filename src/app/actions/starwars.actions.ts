import { createAction, props } from '@ngrx/store';
import { StarWarsPeople, StarWarsPlanets, StarWarsStarships } from '../api.service';

export const init = createAction('[Star Wars] start');
export const loadPeople = createAction('[Star Wars] people Load');
export const loadPlanets = createAction('[Star Wars] planets Load');
export const loadStarships = createAction('[Star Wars] Starships Load');

export const loadPeopleSuccess = createAction(
  '[Star Wars] People Load Success',
  props<{ people: StarWarsPeople[] }>()
)

export const loadPlanetsSuccess = createAction(
  '[Star Wars] Planets Load Success',
  props<{ planets: StarWarsPlanets[] }>()
)

export const loadStarshipsSuccess = createAction(
  '[Star Wars] Starships Load Success',
  props<{ starships: StarWarsStarships[] }>()
)


