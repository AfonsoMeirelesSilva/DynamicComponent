import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LoaderComponent } from 'src/app/pages/cliente/loader/loader.component';
import { ClienteComponent } from './cliente.component';
import { ClienteRoutingModule } from './cliente.routes';
import { VistadorObservadorCrudComponent } from './vistador-observador-crud/vistador-observador-crud.component';
import { VistadorObservadorComponent } from './vistador-observador/vistador-observador.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  imports: [
    CommonModule,
    ClienteRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    FormsModule, 
    MatDialogModule,
    MatIconModule    
  ],
  declarations: [
    ClienteComponent,
    LoaderComponent,
    VistadorObservadorComponent,
    VistadorObservadorCrudComponent
  ]
})
export class ClienteModule { }
