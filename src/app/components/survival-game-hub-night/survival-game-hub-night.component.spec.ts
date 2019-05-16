import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvivalGameHubNightComponent } from './survival-game-hub-night.component';

describe('SurvivalGameHubNightComponent', () => {
  let component: SurvivalGameHubNightComponent;
  let fixture: ComponentFixture<SurvivalGameHubNightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurvivalGameHubNightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurvivalGameHubNightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
