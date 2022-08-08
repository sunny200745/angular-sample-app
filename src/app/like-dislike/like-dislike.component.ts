import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { like, dislike, } from '../actions/like-dislike.actions';
import { LikeDisLike } from '../reducers/like-dislike.reducer';


@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.scss']
})
export class LikeDislikeComponent implements OnInit {

  likeDislike$: Observable<LikeDisLike> | undefined;
  constructor(private store: Store<{ likeDislike: LikeDisLike }>) {
    this.likeDislike$ = store.select(state => state.likeDislike);
    
    this.likeDislike$.subscribe(res => console.log(res))
  }

  ngOnInit(): void {
  }

  onLikeClicked() {
    this.store.dispatch(like());
  }

  onDisLikeClicked() {
    this.store.dispatch(dislike());
  }

}
