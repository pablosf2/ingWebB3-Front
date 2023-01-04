import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPabloComponent } from './test-pablo.component';

describe('TestPabloComponent', () => {
  let component: TestPabloComponent;
  let fixture: ComponentFixture<TestPabloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPabloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestPabloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
