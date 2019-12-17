import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcenyUczniowieComponent } from './oceny-uczniowie.component';

describe('OcenyUczniowieComponent', () => {
  let component: OcenyUczniowieComponent;
  let fixture: ComponentFixture<OcenyUczniowieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcenyUczniowieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcenyUczniowieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
