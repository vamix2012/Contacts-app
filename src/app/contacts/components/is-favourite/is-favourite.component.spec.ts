import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsFavouriteComponent } from './is-favourite.component';

describe('IsFavouriteComponent', () => {
  let component: IsFavouriteComponent;
  let fixture: ComponentFixture<IsFavouriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsFavouriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
