import { createAction, props, Action } from '@ngrx/store';

// export const INCREMENT = '[Counter] increment';
// export const DECREMENT = '[Counter] decrement';
// export const RESET = '[Counter] reset';


// export class Increment implements Action {
//   readonly type = INCREMENT;
//   constructor(public payload:{count:number}){}
// }
// export class Decrement implements Action {
//   readonly type = DECREMENT;
//   constructor(public payload:{count:number}){}
// }
// export class Reset implements Action {
//   readonly type = RESET;
//   constructor(public payload:{count:number}){}
// }

// export type ALLCounterActions = Increment | Decrement | Reset;

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');