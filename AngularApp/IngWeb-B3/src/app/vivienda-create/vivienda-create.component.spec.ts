import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViviendaCreateComponent } from './vivienda-create.component';

describe('ViviendaCreateComponent', () => {
  let component: ViviendaCreateComponent;
  let fixture: ComponentFixture<ViviendaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViviendaCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViviendaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
