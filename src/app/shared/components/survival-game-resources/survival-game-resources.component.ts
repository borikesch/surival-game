import { Component, Input } from '@angular/core';
import { Resources } from '../../models/resources.model';

@Component({
  selector: 'app-survival-game-resources',
  templateUrl: './survival-game-resources.component.html',
  styleUrls: ['./survival-game-resources.component.css']
})
export class SurvivalGameResourcesComponent {
  @Input() resources: Resources;
}
