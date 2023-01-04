import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViviendasComponent } from './viviendas.component';

describe('ViviendasComponent', () => {
  let component: ViviendasComponent;
  let fixture: ComponentFixture<ViviendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViviendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViviendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
