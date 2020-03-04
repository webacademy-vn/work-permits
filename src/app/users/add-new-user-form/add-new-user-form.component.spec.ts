import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewUserFormComponent } from './add-new-user-form.component';

describe('AddNewUserFormComponent', () => {
  let component: AddNewUserFormComponent;
  let fixture: ComponentFixture<AddNewUserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewUserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
