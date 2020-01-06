import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UczniowieComponent } from './uczniowie.component';

describe('UczniowieComponent', () => {
  let component: UczniowieComponent;
  let fixture: ComponentFixture<UczniowieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UczniowieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UczniowieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
