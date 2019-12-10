import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KursyOsobyComponent } from './kursy-osoby.component';

describe('KursyOsobyComponent', () => {
  let component: KursyOsobyComponent;
  let fixture: ComponentFixture<KursyOsobyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KursyOsobyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KursyOsobyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
