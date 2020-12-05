import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcsardpEditComponent } from './ocsardp-edit.component';

describe('OcsardpEditComponent', () => {
  let component: OcsardpEditComponent;
  let fixture: ComponentFixture<OcsardpEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcsardpEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcsardpEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
