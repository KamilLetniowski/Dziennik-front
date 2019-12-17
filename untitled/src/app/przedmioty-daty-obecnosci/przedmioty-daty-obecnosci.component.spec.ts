import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrzedmiotyDatyObecnosciComponent } from './przedmioty-daty-obecnosci.component';

describe('PrzedmiotyDatyObecnosciComponent', () => {
  let component: PrzedmiotyDatyObecnosciComponent;
  let fixture: ComponentFixture<PrzedmiotyDatyObecnosciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrzedmiotyDatyObecnosciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrzedmiotyDatyObecnosciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
