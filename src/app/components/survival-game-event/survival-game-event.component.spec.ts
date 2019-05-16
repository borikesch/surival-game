import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvivalGameEventComponent } from './survival-game-event.component';

describe('SurvivalGameEventComponent', () => {
  let component: SurvivalGameEventComponent;
  let fixture: ComponentFixture<SurvivalGameEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurvivalGameEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurvivalGameEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
