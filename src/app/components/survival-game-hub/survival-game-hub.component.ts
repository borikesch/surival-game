import { Component, OnInit } from '@angular/core';
import { Action } from 'src/app/shared/models/action.model';
import { Resources } from 'src/app/shared/models/resources.model';

@Component({
  selector: 'app-survival-game-hub',
  templateUrl: './survival-game-hub.component.html',
  styleUrls: ['./survival-game-hub.component.css']
})
export class SurvivalGameHubComponent implements OnInit {
  actions: Action[];
  resources: Resources;

  constructor() {
  }

  ngOnInit() {
    this.actions = [
      new Action('Eat food', 'food'),
      new Action('Spend money', 'money')
    ];

    this.resources = new Resources(100, 100);
    console.log(this.resources);
  }

  onActionClick(action: Action) {
    if (action.action === 'food') { this.onActionEatFood(); }
    if (action.action === 'money') { this.onActionSpendMoney(); }
  }

  onActionEatFood() {
    this.resources.food--;
  }

  onActionSpendMoney() {
    this.resources.money--;
  }
}
