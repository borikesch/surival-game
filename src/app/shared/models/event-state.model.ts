import { Event } from './event.model';

export class EventState {
  public eventStarted = false;
  public eventCompleted = false;
  public isFromDayToNight = false;
  public isFromNightToDay = false;

  public firstEventType = '';
  public secondEventType = '';

  public firstEvent?: Event;
  public secondEvent?: Event;
  public thirdEvent?: Event;
}
