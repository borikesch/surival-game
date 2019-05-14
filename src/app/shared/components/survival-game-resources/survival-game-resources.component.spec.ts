import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurvivalGameResourcesComponent } from './survival-game-resources.component';

describe('SurvivalGameResourcesComponent', () => {
  let component: SurvivalGameResourcesComponent;
  let fixture: ComponentFixture<SurvivalGameResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurvivalGameResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurvivalGameResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
