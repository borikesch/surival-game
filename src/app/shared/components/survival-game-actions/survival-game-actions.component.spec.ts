import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvivalGameActionsComponent } from './survival-game-actions.component';

describe('SurvivalGameActionsComponent', () => {
  let component: SurvivalGameActionsComponent;
  let fixture: ComponentFixture<SurvivalGameActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurvivalGameActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurvivalGameActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
