import { Action, createReducer, on } from '@ngrx/store';
import {loadPhotos, loadPhotosError, loadPhotosSuccess} from '../actions/photo.actions';

export interface Photo{
  
    id: string,
    title: string,
    url: string,
    likes: number,
    dislikes: number,
  
}

export const photoFeatureKey = 'photo';

export interface PhotoState {}

export const initialState: PhotoState = {};

export const reducer = createReducer(
  initialState,
  on(loadPhotosSuccess, (state,{photos}) => photos.reduce((acc,photo)=>({
    ...acc,
    [photo.id]:photo
  })))

);
