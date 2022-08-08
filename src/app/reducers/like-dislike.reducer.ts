import { Action, createReducer, on } from '@ngrx/store';
import { like, dislike } from '../actions/like-dislike.actions';


export const likeDislikeFeatureKey = 'likeDislike';

export interface LikeDisLike {
  like: number,
  dislike: number
}

export const initialState = {
  like: 100,
  dislike: 25
};

export const likeDislikeReducer = createReducer(
  initialState,
  on(like,
    state => ({ ...state, like: state.like + 1, dislike: state.dislike - 1 })),
  on(dislike, state => ({ ...state, like: state.like - 1, dislike: state.dislike +1 }))
);
