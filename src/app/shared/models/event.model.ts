import { Action } from './action.model';

export class Event {
  public title: string;
  public actions: Action[];
  public chance: number;
  public fireIncrease: number;
  public foodIncrease: number;
  public healthIncrease: number;
  public woodIncrease: number;
}
