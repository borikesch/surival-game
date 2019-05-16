import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from 'src/app/shared/models/action.model';
import { EventState } from 'src/app/shared/models/event-state.model';
import { GameState } from 'src/app/shared/models/game-state.model';
import { GameStateService } from 'src/app/shared/services/game-state.service';

@Component({
  selector: 'app-survival-game-hub-night',
  templateUrl: './survival-game-hub-night.component.html',
  styleUrls: ['./survival-game-hub-night.component.css']
})
export class SurvivalGameHubNightComponent implements OnInit {
  actions: Action[];
  gameState: GameState;

  messageText: string;
  title: string;

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

    this.actions = [
      new Action('Go to sleep', 'sleep'),
      new Action('Stay awake', 'awake')
    ];

    this.gameStateService.updateGameState(this.gameState);
  }

  onActionClick(action: Action) {
    if (action.action === 'sleep') { this.onActionSleep(); }
    if (action.action === 'awake') { this.onActionAwake(); }
  }

  onActionSleep() {
    this.proceedToDay();
    this.router.navigate(['/event', 'sleep']);
  }

  onActionAwake() {
    this.proceedToDay();
    this.router.navigate(['/event', 'awake']);
  }

  proceedToDay() {
    this.gameState.eventState.isFromNightToDay = true;
    this.gameStateService.updateGameState(this.gameState);
  }

}
