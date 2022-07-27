import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../loading.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  isLoading: Observable<boolean> | undefined;
  constructor(public loadingService: LoadingService) { 
    this.isLoading = this.loadingService.loading$;
  }

  ngOnInit(): void {
  }

}
