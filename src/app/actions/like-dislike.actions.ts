import { createAction, props } from '@ngrx/store';

export const like = createAction(
  '[Like]  Clicked'
);

export const dislike = createAction(
  '[DisLike]  Clicked'
);



