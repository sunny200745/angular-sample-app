import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private _loading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this._loading.asObservable();
  
  constructor() { }

  setLoadingValue(val:boolean){
    this._loading.next(val);
  }

  // setLoadingValue(){
  //   this._loading.next(false);
  // }

  showLoader(){
    this._loading.next(true);
  }

  hideLoader(){
    this._loading.next(false);
  }

}
