import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingAlgoComponent } from './matching-algo.component';

describe('MatchingAlgoComponent', () => {
  let component: MatchingAlgoComponent;
  let fixture: ComponentFixture<MatchingAlgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchingAlgoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchingAlgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
