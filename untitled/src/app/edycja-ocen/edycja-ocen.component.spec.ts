import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdycjaOcenComponent } from './edycja-ocen.component';

describe('EdycjaOcenComponent', () => {
  let component: EdycjaOcenComponent;
  let fixture: ComponentFixture<EdycjaOcenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdycjaOcenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdycjaOcenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
