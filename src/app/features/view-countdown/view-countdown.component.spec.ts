import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCountdownComponent } from './view-countdown.component';

describe('ViewCountdownComponent', () => {
  let component: ViewCountdownComponent;
  let fixture: ComponentFixture<ViewCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCountdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
