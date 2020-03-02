import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveUsersTableComponent } from './active-users-table.component';

describe('ActiveUsersTableComponent', () => {
  let component: ActiveUsersTableComponent;
  let fixture: ComponentFixture<ActiveUsersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveUsersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveUsersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
