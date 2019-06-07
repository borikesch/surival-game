import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'src/app/shared/models/action.model';
import { EventState } from 'src/app/shared/models/event-state.model';
import { Event } from 'src/app/shared/models/event.model';
import { GameState } from 'src/app/shared/models/game-state.model';
import { EventService } from 'src/app/shared/services/event.service';
import { GameStateService } from 'src/app/shared/services/game-state.service';

@Component({
  selector: 'app-survival-game-event',
  templateUrl: './survival-game-event.component.html',
  styleUrls: ['./survival-game-event.component.css']
})
export class SurvivalGameEventComponent implements OnInit {
  firstEvent: Event;
  secondEvent: Event;
  thirdEvent: Event;

  eventType: string;
  eventState: EventState;
  gameState: GameState;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private gameStateService: GameStateService,
    private eventService: EventService
  ) {
    this.eventType = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    if (this.eventType !== 'hunt' && this.eventType !== 'scavenge' &&
      this.eventType !== 'rest' && this.eventType !== 'sleep' &&
      this.eventType !== 'awake') {
      this.router.navigateByUrl('/main/day');
    }
    this.gameState = this.gameStateService.getGameState();
    this.gameState.eventState.eventStarted = true;
    if (this.gameState.eventState.firstEvent === undefined) {
      this.eventService.getNextEvent(this.eventType + '/' + this.eventType).subscribe(event => {
        this.gameState.eventState.firstEvent = event;
        this.gameStateService.updateGameState(this.gameState);
      });
    } else if (this.gameState.eventState.secondEvent === undefined && this.gameState.eventState.firstEventType !== '') {
      this.eventService.getNextEvent(this.eventType + '/step2/' + this.gameState.eventState.firstEventType).subscribe(event => {
        this.gameState.eventState.secondEvent = event;
        this.gameStateService.updateGameState(this.gameState);
      });
    } else if (this.gameState.eventState.thirdEvent === undefined && this.gameState.eventState.secondEventType !== '') {
      this.eventService.getNextEvent(this.eventType + '/step3/' + this.gameState.eventState.secondEventType).subscribe(event => {
        this.gameState.eventState.thirdEvent = event;
        this.gameStateService.updateGameState(this.gameState);
      });
    }
    this.gameStateService.updateGameState(this.gameState);
  }

  public onClickFirstEvent(action: Action): void {
    this.gameState.eventState.firstEventType = action.action;
    this.eventService.getNextEvent(this.eventType + '/step2/' + this.gameState.eventState.firstEventType).subscribe(event => {
      this.gameState.eventState.secondEvent = event;
      this.gameStateService.updateGameState(this.gameState);
    });
  }

  public onClickSecondEvent(action: Action): void {
    this.gameState.eventState.secondEventType = action.action;
    this.eventService.getNextEvent(this.eventType + '/step3/' + this.gameState.eventState.secondEventType).subscribe(event => {
      this.gameState.eventState.thirdEvent = event;
      this.gameStateService.updateGameState(this.gameState);
    });
  }

  public onClickThirdEvent(): void {
    // todo check validity
    this.gameState.resources.wood += this.gameState.eventState.thirdEvent.woodIncrease !== undefined ?
      this.gameState.eventState.thirdEvent.woodIncrease : 0;
    this.gameState.resources.fire += this.gameState.eventState.thirdEvent.fireIncrease !== undefined ?
      this.gameState.eventState.thirdEvent.fireIncrease : 0;
    this.gameState.resources.health += this.gameState.eventState.thirdEvent.healthIncrease !== undefined ?
      this.gameState.eventState.thirdEvent.healthIncrease : 0;
    this.gameState.resources.food += this.gameState.eventState.thirdEvent.foodIncrease !== undefined ?
      this.gameState.eventState.thirdEvent.foodIncrease : 0;

    this.gameState.eventState.eventCompleted = true;

    this.gameStateService.updateGameState(this.gameState);

    const nextUrl = '/main/' + (this.gameState.eventState.isFromDayToNight ? 'night' : 'day');

    this.router.navigateByUrl(nextUrl);
  }

}
