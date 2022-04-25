import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaecherdetailsComponent } from './taecherdetails.component';

describe('TaecherdetailsComponent', () => {
  let component: TaecherdetailsComponent;
  let fixture: ComponentFixture<TaecherdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaecherdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaecherdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
