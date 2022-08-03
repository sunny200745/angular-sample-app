import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksWithPromiseComponent } from './books-with-promise.component';

describe('BooksWithPromiseComponent', () => {
  let component: BooksWithPromiseComponent;
  let fixture: ComponentFixture<BooksWithPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksWithPromiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksWithPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
