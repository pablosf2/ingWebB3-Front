import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaModifyComponent } from './reserva-modify.component';

describe('ReservaModifyComponent', () => {
  let component: ReservaModifyComponent;
  let fixture: ComponentFixture<ReservaModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
