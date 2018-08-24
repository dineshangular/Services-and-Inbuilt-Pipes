import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSerivceListComponent } from './employee-serivce-list.component';

describe('EmployeeSerivceListComponent', () => {
  let component: EmployeeSerivceListComponent;
  let fixture: ComponentFixture<EmployeeSerivceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeSerivceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSerivceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
