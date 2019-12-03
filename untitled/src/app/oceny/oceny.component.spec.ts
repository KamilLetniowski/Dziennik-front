import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcenyComponent } from './oceny.component';

describe('OcenyComponent', () => {
  let component: OcenyComponent;
  let fixture: ComponentFixture<OcenyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcenyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcenyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
