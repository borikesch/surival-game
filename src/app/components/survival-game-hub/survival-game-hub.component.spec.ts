import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvivalGameHubComponent } from './survival-game-hub.component';

describe('SurvivalGameHubComponent', () => {
  let component: SurvivalGameHubComponent;
  let fixture: ComponentFixture<SurvivalGameHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurvivalGameHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurvivalGameHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
