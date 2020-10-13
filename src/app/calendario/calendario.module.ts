import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerarCalendarioComponent } from './gerar-calendario/gerar-calendario.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
])


@NgModule({
  declarations: [GerarCalendarioComponent],
  exports: [
    GerarCalendarioComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule
  ]
})
export class CalendarioModule { }
