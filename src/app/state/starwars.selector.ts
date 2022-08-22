// import { state } from '@angular/animations';
import { createSelector } from '@ngrx/store';
import { RootStarWarState } from '../reducers/starwars.reducer';

const getRootState = (state:any) => {

    return state.rootState;
}

const getPeople = (state: RootStarWarState) => {
   return  state.people
};
const getPlanets = (state: RootStarWarState) => state.planets;
const getStarships = (state: RootStarWarState) => state?.starships;

export const starWarPeople = createSelector(
    getRootState,
    getPeople
)

export const starWarPlanets = createSelector(
    getRootState,
    getPlanets
)

export const starWarStarships = createSelector(
    getRootState,
    getStarships
)
