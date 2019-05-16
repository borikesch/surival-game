import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurvivalGameEventComponent } from './components/survival-game-event/survival-game-event.component';
import { SurvivalGameGameOverComponent } from './components/survival-game-game-over/survival-game-game-over.component';
import { SurvivalGameHubNightComponent } from './components/survival-game-hub-night/survival-game-hub-night.component';
import { SurvivalGameHubComponent } from './components/survival-game-hub/survival-game-hub.component';

const routes: Routes = [
  { path: 'main/day', component: SurvivalGameHubComponent },
  { path: 'main/night', component: SurvivalGameHubNightComponent },
  { path: 'event/:id', component: SurvivalGameEventComponent },
  { path: 'game-over', component: SurvivalGameGameOverComponent },
  { path: '**', redirectTo: 'main/day' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
