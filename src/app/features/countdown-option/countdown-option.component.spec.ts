import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownOptionComponent } from './countdown-option.component';

describe('CountdownOptionComponent', () => {
  let component: CountdownOptionComponent;
  let fixture: ComponentFixture<CountdownOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
