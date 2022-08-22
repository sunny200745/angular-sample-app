import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs';
import { Book } from './book-list/books.model';

export interface StarWarsPeople {
  name: string,
  gender: string,
  height:string
}

export interface StarWarsPlanets {
  name: string,
  diameter: string,
  climate:string
}

export interface StarWarsStarships {
  name: string,
  model: string,
  starship_class:string,
  films:[]
}
interface ResultData {
  results: []
}
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

  getStarWarsPeople(){
    return this.http
    .get('https://swapi.dev/api/people/')
    .pipe(
      map((data:any)=> data.results)
    )
  }

  getStarWarsStarships(){
    return this.http
    .get('https://swapi.dev/api/starships/')
    .pipe(
      map((data:any)=> data.results),
      delay(1500)
    )
  }

  getStarWarsPlanets(){
    return this.http
    .get('https://swapi.dev/api/planets/')
    .pipe(
      map((data:any)=> data.results),
      delay(2500)
    )
  }

}



