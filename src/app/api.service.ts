import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  getSampleToDoList(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  
}



