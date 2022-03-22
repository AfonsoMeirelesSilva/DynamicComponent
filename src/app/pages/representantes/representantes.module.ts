import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepresentantesComponent } from './representantes.component';
import { RepresentantesRoutingModule } from './representantes.routes';
import { LoaderModule } from 'src/app/components/loader/loader.module';

@NgModule({
  imports: [
    CommonModule,
    RepresentantesRoutingModule,
    LoaderModule
  ],
  declarations: [RepresentantesComponent]
})
export class RepresentantesModule { }
