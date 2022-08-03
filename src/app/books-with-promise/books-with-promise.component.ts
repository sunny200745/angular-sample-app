import { Component, OnInit } from '@angular/core';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { ApiService } from '../api.service';


interface sampleTODO {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

@Component({
  selector: 'app-books-with-promise',
  templateUrl: './books-with-promise.component.html',
  styleUrls: ['./books-with-promise.component.scss']
})
export class BooksWithPromiseComponent implements OnInit {
  sampleTODOList: sampleTODO[] = [];
  displayedTODOList: sampleTODO[] = [];
  allPages: number | undefined;
  itemsPerPage: number = 10;
  promiseOutput: any = "";

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.simplePromiseExample().then((val)=>{
      this.promiseOutput = val;
    });
  }

  getSampleData() {

    const sampleTODOList$: any = this.apiService.getSampleToDoList();

    firstValueFrom(sampleTODOList$).then((list: any) => {
      console.log(list);
      this.sampleTODOList = list;
      this.onPageChange();
      this.allPages = Math.ceil(this.sampleTODOList.length / this.itemsPerPage);
    })

  }

  onPageChange(page: number = 1): void {
    const startItem = (page - 1) * this.itemsPerPage;
    const endItem = page * this.itemsPerPage;
    this.displayedTODOList = this.sampleTODOList.slice(startItem, endItem)
  }

  simplePromiseExample() {
    let task:boolean = true;
    return new Promise((resolve, reject)=> {
      setTimeout(()=>{
        if(task){
          resolve("Task complete after 2 sec")
        } else {
          reject ('Task rejected after 2 sec')
        }
      },2000)
    });
  }

}
