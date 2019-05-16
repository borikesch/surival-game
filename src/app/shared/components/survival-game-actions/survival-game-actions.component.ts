import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Action } from '../../models/action.model';

@Component({
  selector: 'app-survival-game-actions',
  templateUrl: './survival-game-actions.component.html',
  styleUrls: ['./survival-game-actions.component.css']
})
export class SurvivalGameActionsComponent {
  @Input() actions: Action[];
  @Input() title: string;
  @Input() disabled: boolean;
  @Output() actionClick: EventEmitter<any> = new EventEmitter();

  onActionClick(event) {
    this.actionClick.emit(event);
  }

}
