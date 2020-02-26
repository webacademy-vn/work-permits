import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermitTemplatesComponent } from './permit-templates.component';

describe('PermitTemplatesComponent', () => {
  let component: PermitTemplatesComponent;
  let fixture: ComponentFixture<PermitTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermitTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermitTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
