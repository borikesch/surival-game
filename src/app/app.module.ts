import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurvivalGameHubComponent } from './components/survival-game-hub/survival-game-hub.component';
import { SurvivalGameResourcesComponent } from './shared/components/survival-game-resources/survival-game-resources.component';
import { SurvivalGameActionsComponent } from './shared/components/survival-game-actions/survival-game-actions.component';
import { ActionComponent } from './shared/components/action/action.component';

@NgModule({
  declarations: [
    AppComponent,
    SurvivalGameHubComponent,
    SurvivalGameResourcesComponent,
    SurvivalGameActionsComponent,
    ActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
