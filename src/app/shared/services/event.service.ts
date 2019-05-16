import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  url = 'assets/events/';

  constructor(
    private http: HttpClient
  ) { }

  getNextEvent(action: string): Observable<Event> {
    return this.http.get<Event[]>(`${this.url}/${action}.json`).pipe(
      map(data => {
        return data[Math.floor(Math.random() * data.length)];
      })
    );
  }
}
