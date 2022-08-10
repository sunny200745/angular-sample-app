import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/counter.actions';

import { addBook, removeBook, retrievedBookList } from '../actions/books.actions';
import { ApiService } from '../api.service';
import { selectBookCollection, selectBooks } from '../state/books.selectors';

@Component({
  selector: 'app-books-with-store',
  templateUrl: './books-with-store.component.html',
  styleUrls: ['./books-with-store.component.scss']
})
export class BooksWithStoreComponent implements OnInit {
  count$: Observable<number> | undefined;
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  constructor(private store: Store<{ count: number }>, private bookService: ApiService) {
    this.count$ = store.select('count');
  }

  ngOnInit(): void {
    this.bookService.getStoreBooks()
      .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));
  }

  increment() {
    this.store.dispatch(increment())
  }

  decrement() {
    this.store.dispatch(decrement())
  }

  reset() {
    this.store.dispatch(reset())
  }

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }))
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }))
  }


}
