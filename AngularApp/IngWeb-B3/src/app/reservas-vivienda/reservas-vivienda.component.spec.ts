import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasViviendaComponent } from './reservas-vivienda.component';

describe('ReservasViviendaComponent', () => {
  let component: ReservasViviendaComponent;
  let fixture: ComponentFixture<ReservasViviendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservasViviendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservasViviendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
