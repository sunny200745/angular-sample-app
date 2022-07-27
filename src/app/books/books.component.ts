import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, finalize } from "rxjs/operators";


import { ApiService } from '../api.service';
import { LoadingService } from '../loading.service';


interface sampleTodo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  queryField: FormControl = new FormControl();
  items: any;
  loading$: Observable<boolean>;
  sampleTodoList: sampleTodo[] = [];
  displayedTodoList:sampleTodo[] = [];
  allPages:number | undefined;
  itemsPerPage:number  = 10;
  
  constructor(
    private formBuilder: FormBuilder, 
    private apiService: ApiService, 
    public loaderService: LoadingService
  ) { 
    this.loading$ = this.loaderService.loading$;
  }

  ngOnInit(): void {


    this.queryField.valueChanges
    .pipe(
        debounceTime(1000), 
        distinctUntilChanged()
      )
      .subscribe((queryField: any) => {
        console.log("Subscribe Queryfield")
        this.loaderService.setLoadingValue(true);

        this.apiService.getBook(queryField)
        .pipe(
          finalize(() => {
            this.loaderService.setLoadingValue(false);
            console.log('In finalize')
          })
        )
        .subscribe((results: any) => {
            this.items = results.items;
        })
      })
  }

  getSampleData() {
    this.apiService.getSampleToDoList().subscribe((list:any) => {
      this.sampleTodoList = list;
      this.onPageChange();
      this.allPages = Math.ceil(this.sampleTodoList.length / this.itemsPerPage);
    })
  }
  
  onPageChange(page: number = 1):void {
    const startItem = (page - 1) * this.itemsPerPage;
    const endItem = page * this.itemsPerPage;
    this.displayedTodoList = this.sampleTodoList.slice(startItem, endItem)
    console.log('Sample sdata--->', this.displayedTodoList)
  }

}

