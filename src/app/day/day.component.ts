import { Component, OnInit, Input } from '@angular/core';

import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getDayEvents(this.date['fullDate']);
  }

  @Input() date: Object;

  events: Event[];

  private getDayEvents(date: string): void {
    this.eventService.getEventsByDate(date)
                     .subscribe(events => this.date['events'] = events);
  }
}
