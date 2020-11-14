import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentTypeEditComponent } from './incident-type-edit.component';

describe('IncidentTypeEditComponent', () => {
  let component: IncidentTypeEditComponent;
  let fixture: ComponentFixture<IncidentTypeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentTypeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
