import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Book } from './book-list/books.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  key = 'AIzaSyAZ7iLOrYFkToebJE7JtBCYN111MpbwZP4';
  constructor(private http: HttpClient) { }

  getBook(queryField: String) {
    return this.http.get(
      `https://www.googleapis.com/books/v1/volumes?q=${queryField}&maxResults=39&keyes&key=${this.key}`
    )
  }

  getSampleToDoList() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  getStoreBooks() {
    return this.http
    .get<{items:Book[]}>('https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks')
      .pipe(map((books) => books.items || []))
  }

}



