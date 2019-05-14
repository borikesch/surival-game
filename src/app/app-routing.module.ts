import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurvivalGameHubComponent } from './components/survival-game-hub/survival-game-hub.component';

const routes: Routes = [
  { path: 'main', component: SurvivalGameHubComponent },
  { path: '**', redirectTo: 'main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
