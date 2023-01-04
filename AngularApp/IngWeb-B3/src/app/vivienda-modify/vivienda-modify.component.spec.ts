import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViviendaModifyComponent } from './vivienda-modify.component';

describe('ViviendaModifyComponent', () => {
  let component: ViviendaModifyComponent;
  let fixture: ComponentFixture<ViviendaModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViviendaModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViviendaModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
