import { Component, OnInit } from '@angular/core';
import {CalendarOptions} from '@fullcalendar/angular';


@Component({
  selector: 'app-gerar-calendario',
  templateUrl: './gerar-calendario.component.html',
  styleUrls: ['./gerar-calendario.component.scss']
})
export class GerarCalendarioComponent implements OnInit {

  constructor() { }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'Horário disponivel', date: '2020-11-25' },
      { title: 'Reservado', date: '2020-11-24' }
    ]
  };

  // tslint:disable-next-line:typedef
  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr);
  }

  ngOnInit(): void {
  }

}
