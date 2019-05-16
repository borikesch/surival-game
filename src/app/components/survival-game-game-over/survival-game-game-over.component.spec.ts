import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvivalGameGameOverComponent } from './survival-game-game-over.component';

describe('SurvivalGameGameOverComponent', () => {
  let component: SurvivalGameGameOverComponent;
  let fixture: ComponentFixture<SurvivalGameGameOverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurvivalGameGameOverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurvivalGameGameOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
