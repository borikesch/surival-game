import { EventState } from './event-state.model';
import { Resources } from './resources.model';

export class GameState {
  public resources = new Resources();
  public day = 0;
  public eventState = new EventState();
}
