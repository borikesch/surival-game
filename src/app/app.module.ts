import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurvivalGameEventComponent } from './components/survival-game-event/survival-game-event.component';
import { SurvivalGameHubComponent } from './components/survival-game-hub/survival-game-hub.component';
import { ActionComponent } from './shared/components/action/action.component';
import { SurvivalGameActionsComponent } from './shared/components/survival-game-actions/survival-game-actions.component';
import { SurvivalGameResourcesComponent } from './shared/components/survival-game-resources/survival-game-resources.component';
import { SurvivalGameHubNightComponent } from './components/survival-game-hub-night/survival-game-hub-night.component';


@NgModule({
  declarations: [
    AppComponent,
    SurvivalGameHubComponent,
    SurvivalGameResourcesComponent,
    SurvivalGameActionsComponent,
    ActionComponent,
    SurvivalGameEventComponent,
    SurvivalGameHubNightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
