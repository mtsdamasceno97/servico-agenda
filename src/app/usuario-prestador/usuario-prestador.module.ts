import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirPrestadorComponent } from './inserir-prestador/inserir-prestador.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [InserirPrestadorComponent],
  exports: [InserirPrestadorComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ]
})
export class UsuarioPrestadorModule { }
