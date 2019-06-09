import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from 'src/app/shared/models/action.model';
import { GameStateService } from 'src/app/shared/services/game-state.service';

@Component({
  selector: 'app-survival-game-game-over',
  templateUrl: './survival-game-game-over.component.html'
})
export class SurvivalGameGameOverComponent implements OnInit {
  title = 'Too bad... You didn\'t make it anymore...';
  actions: Action[];
  constructor(
    private gameStateService: GameStateService,
    private router: Router
  ) { }

  ngOnInit() {
    this.gameStateService.resetGameState();
    // TODO extract content to service to simplify component
    this.actions = [
      new Action('Yes, I want to try again', '')
    ];
  }

  public onActionClick(): void {
    this.router.navigateByUrl('/main/day');
  }

}
