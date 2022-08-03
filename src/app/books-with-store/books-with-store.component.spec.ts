import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksWithStoreComponent } from './books-with-store.component';

describe('BooksWithStoreComponent', () => {
  let component: BooksWithStoreComponent;
  let fixture: ComponentFixture<BooksWithStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksWithStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksWithStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
