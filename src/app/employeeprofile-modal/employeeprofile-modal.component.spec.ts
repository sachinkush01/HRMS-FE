import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeprofileModalComponent } from './employeeprofile-modal.component';

describe('EmployeeprofileModalComponent', () => {
  let component: EmployeeprofileModalComponent;
  let fixture: ComponentFixture<EmployeeprofileModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeprofileModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeprofileModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
