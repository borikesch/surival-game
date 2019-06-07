import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Action } from '../../models/action.model';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent {
  @Input() action: Action;
  @Input() disabled: boolean;
  @Output() actionClick: EventEmitter<any> = new EventEmitter();
  public onActionClick = () => this.actionClick.emit(this.action);
}
