import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset} from '../actions/counter.actions';

export const counterInitialValue:number = 0;

export const counterReducer = createReducer(
  counterInitialValue,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => state = 0)
);
