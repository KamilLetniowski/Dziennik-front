import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrzedmiotyDatyComponent } from './przedmioty-daty.component';

describe('PrzedmiotyDatyComponent', () => {
  let component: PrzedmiotyDatyComponent;
  let fixture: ComponentFixture<PrzedmiotyDatyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrzedmiotyDatyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrzedmiotyDatyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
