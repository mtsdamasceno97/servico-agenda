import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [MenuComponent, FooterComponent],
  exports: [
    MenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    RouterModule,
    MatIconModule
  ]
})
export class LayoutModule { }
