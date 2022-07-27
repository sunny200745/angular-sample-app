import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() itemsPerPage:number | undefined;
  @Input() allPagesNumber:number | undefined;
  @Output() changePage:EventEmitter<number> = new EventEmitter<number>();
  private _currentPage:number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  get currentPage(){
    return this._currentPage;
  }

  set currentPage(page:number){
    this._currentPage = page;
    this.changePage.emit(this.currentPage)
  }

  // onFirstPage(){
  //   this.currentPage = 1;
  // }

  // onSetPage(event: any ){
  //   this.currentPage = event.target.value;
  // }
  onNextPage(){

    this.currentPage += 1;
    console.log(this.currentPage)
  }

  onPreviousPage(){
    this.currentPage -= 1;
  }

}
