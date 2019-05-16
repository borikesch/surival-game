import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from 'src/app/shared/models/action.model';
import { EventState } from 'src/app/shared/models/event-state.model';
import { GameState } from 'src/app/shared/models/game-state.model';
import { GameStateService } from 'src/app/shared/services/game-state.service';

@Component({
  selector: 'app-survival-game-hub',
  templateUrl: './survival-game-hub.component.html',
  styleUrls: ['./survival-game-hub.component.css']
})
export class SurvivalGameHubComponent implements OnInit {
  morningActions: Action[];
  afternoonActions: Action[];
  gameState: GameState;

  messageText: string;
  title: string;

  constructor(
    private router: Router,
    private gameStateService: GameStateService) {
  }

  ngOnInit() {
    this.gameState = this.gameStateService.getGameState();
    console.log(this.gameState);
    if (this.gameState.eventState.eventStarted && !this.gameState.eventState.eventCompleted) {
      if (this.gameState.eventState.isFromNightToDay) {
        this.gameState.eventState = new EventState();
        this.title = 'You tried your best to make the night go away... You succeeded... but at what cost...';
        this.gameState.resources.health--;
      } else {
        this.router.navigateByUrl('/main/night');
      }
    } else {
      this.gameState.eventState = new EventState();
      this.title = 'Another day... Another chance to survive...';
    }

    this.morningActions = [
      new Action('Eat some food to recover health', 'food'),
      new Action('Tend to the fire...', 'wood')
    ];

    this.afternoonActions = [
      new Action('Rest a little bit...', 'rest'),
      new Action('Try to hunt for some food', 'hunt'),
      new Action('Go to the woods to find some firewood', 'scavenge'),
    ];

    this.gameStateService.updateGameState(this.gameState);
  }

  onActionClick(action: Action) {
    if (action.action === 'food') { this.onActionEatFood(); }
    if (action.action === 'wood') { this.onActionSpendWood(); }
    if (action.action === 'hunt') { this.onActionHunt(); }
    if (action.action === 'rest') { this.onActionRest(); }
    if (action.action === 'scavenge') { this.onActionScavenge(); }
  }

  onActionEatFood() {
    // Todo check validity
    this.messageText = 'You ate some food... I hope you left enough...';
    this.gameState.resources.food--; // todo balance
    this.gameState.resources.health++; // todo balance
    this.gameStateService.updateGameState(this.gameState);
  }

  onActionSpendWood() {
    // Todo check validity
    this.messageText = 'The fire is burning nicely... That didn\'t cost to much, did it...?';
    this.gameState.resources.wood--; // todo balance
    this.gameState.resources.fire++; // todo balance
    this.gameStateService.updateGameState(this.gameState);
  }

  onActionHunt() {
    this.proceedToNight();
    this.router.navigate(['/event', 'hunt']);
  }

  onActionRest() {
    this.proceedToNight();
    this.router.navigate(['/event', 'rest']);
  }

  onActionScavenge() {
    this.proceedToNight();
    this.router.navigate(['/event', 'scavenge']);
  }

  proceedToNight() {
    this.gameState.eventState.isFromDayToNight = true;
    this.gameStateService.updateGameState(this.gameState);
  }
}
