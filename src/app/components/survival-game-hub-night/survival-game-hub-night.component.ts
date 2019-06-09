import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from 'src/app/shared/models/action.model';
import { EventState } from 'src/app/shared/models/event-state.model';
import { GameState } from 'src/app/shared/models/game-state.model';
import { GameStateService } from 'src/app/shared/services/game-state.service';

@Component({
  selector: 'app-survival-game-hub-night',
  templateUrl: './survival-game-hub-night.component.html'
})
export class SurvivalGameHubNightComponent implements OnInit {
  actions: Action[];
  gameState: GameState;

  messageText: string;
  title: string;
  subtitle: string;

  constructor(
    private router: Router,
    private gameStateService: GameStateService) { }

  ngOnInit() {
    this.gameState = this.gameStateService.getGameState();
    if (this.gameState.eventState.eventStarted && !this.gameState.eventState.eventCompleted) {
      if (this.gameState.eventState.isFromDayToNight) {
        this.gameState.eventState = new EventState();
        this.title = 'You ran away to your base... You\'re safe now..';
        this.gameState.resources.health--;
      } else {
        this.router.navigateByUrl('/main/night');
      }
    } else {
      this.gameState.eventState = new EventState();
      this.title = 'The night sets in quickly... Luckily you\'re safe at your base';
    }

    this.checkHealth();

    // manage food
    if (this.gameState.resources.food > 0) {
      this.subtitle = 'You eat some food as dinner... That feels good!';
      this.gameState.resources.food--;
    } else {
      this.subtitle = 'You ran out of food... Better find some tomorrow...';
      this.gameState.resources.health--;
    }

    this.checkHealth();

    this.actions = [
      new Action('Go to sleep', 'sleep'),
      new Action('Stay awake', 'awake')
    ];

    this.gameStateService.updateGameState(this.gameState);
  }

  public onActionClick(action: Action): void {
    if (action.action === 'sleep') { this.onActionSleep(); }
    if (action.action === 'awake') { this.onActionAwake(); }
  }

  public onActionSleep(): void {
    this.proceedToDay();
    this.router.navigate(['/event', 'sleep']);
  }

  private onActionAwake(): void {
    this.proceedToDay();
    this.router.navigate(['/event', 'awake']);
  }

  private proceedToDay(): void {
    this.gameState.eventState.isFromNightToDay = true;
    this.gameStateService.updateGameState(this.gameState);
  }

  private checkHealth(): void {
    if (this.gameState.resources.health <= 0) {
      this.router.navigateByUrl('/game-over');
    }
  }
}
