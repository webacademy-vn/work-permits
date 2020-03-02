import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveUsersTableComponent } from './inactive-users-table.component';

describe('InactiveUsersTableComponent', () => {
  let component: InactiveUsersTableComponent;
  let fixture: ComponentFixture<InactiveUsersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InactiveUsersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InactiveUsersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
