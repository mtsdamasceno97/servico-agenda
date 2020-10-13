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
      { title: 'Barbearia', date: '2020-10-11' },
      { title: 'Consulta Dentista', date: '2020-10-15',  }
    ]
  };

  // tslint:disable-next-line:typedef
  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr);
  }

  ngOnInit(): void {
  }

}
