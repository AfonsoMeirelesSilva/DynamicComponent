
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepresentantesComponent } from './representantes.component';



const routes: Routes = [
  { path: '', component:  RepresentantesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepresentantesRoutingModule{}