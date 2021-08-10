import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTableComponent } from './countdown-table.component';

describe('CountdownTableComponent', () => {
  let component: CountdownTableComponent;
  let fixture: ComponentFixture<CountdownTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
