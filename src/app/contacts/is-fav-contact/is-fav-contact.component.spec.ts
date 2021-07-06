import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsFavContactComponent } from './is-fav-contact.component';

describe('IsFavContactComponent', () => {
  let component: IsFavContactComponent;
  let fixture: ComponentFixture<IsFavContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsFavContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsFavContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
