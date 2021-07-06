import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToFavContactComponent } from './add-to-fav-contact.component';

describe('AddToFavContactComponent', () => {
  let component: AddToFavContactComponent;
  let fixture: ComponentFixture<AddToFavContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToFavContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToFavContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
