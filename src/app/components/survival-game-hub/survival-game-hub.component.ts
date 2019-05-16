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
  morningActions: Action[] = [];
  afternoonActions: Action[] = [];
  gameState: GameState;

  messageText: string;
  title: string;
  subtitle: string;

  constructor(
    private router: Router,
    private gameStateService: GameStateService) {
  }

  ngOnInit() {
    // get gameState and check validity
    this.gameState = this.gameStateService.getGameState();
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

    this.checkHealth();

    // manage fire
    if (this.gameState.resources.fire > 0) {
      this.gameState.resources.fire--;
      this.subtitle = this.gameState.resources.fire === 0 ?
        'The fire went out... It\'s getting cold fast' :
        '';
    } else {
      this.gameState.resources.health--;
      this.subtitle = 'You feel cold... You won\'t be able to hold on much longer...';
    }

    // get morning actions
    this.morningActions.push(new Action('Eat some food to recover health', 'food'));
    this.morningActions.push(new Action('Tend to the fire...', 'wood'));

    // get afternoon actions
    this.afternoonActions.push(new Action('Rest a little bit...', 'rest'));
    this.afternoonActions.push(new Action('Try to hunt for some food', 'hunt'));
    this.afternoonActions.push(new Action('Scavenge the woods', 'scavenge'));

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
    if (this.gameState.resources.food <= 0) {
      this.messageText = 'You don\'t have any food left... Hope you survive the night...';
    } else {
      this.messageText = 'You ate some food... I hope you left enough..';
      this.gameState.resources.food--;
      this.gameState.resources.health++;
      this.gameStateService.updateGameState(this.gameState);
    }
  }

  onActionSpendWood() {
    if (this.gameState.resources.wood <= 0) {
      this.messageText = 'You don\'t have any wood left... How are you gonna stay warm...';
    } else {
      if (this.gameState.resources.fire === 0) {
        this.messageText = 'You use some twigs to light the fire...';
      } else if (this.gameState.resources.fire < 4) {
        this.messageText = 'You put some wood on the already burning fire...';
      } else {
        this.messageText = 'The fire burned too high and you got hurt...';
        this.gameState.resources.health--;
        this.checkHealth();
      }
      this.gameState.resources.wood--;
      if (this.gameState.resources.fire < 4) {
        this.gameState.resources.fire++;
      }
      this.gameStateService.updateGameState(this.gameState);
    }

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

  checkHealth() {
    if (this.gameState.resources.health <= 0) {
      this.router.navigateByUrl('/game-over');
    }
  }
}
