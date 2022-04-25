import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateteachersComponent } from './createteachers.component';

describe('CreateteachersComponent', () => {
  let component: CreateteachersComponent;
  let fixture: ComponentFixture<CreateteachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateteachersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateteachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
