import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollComponent } from './scroll.component';
import { ScrollRoutingModule } from './scroll.routes';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  imports: [
    CommonModule,
    ScrollRoutingModule,
    MatBadgeModule
  ],
  declarations: [ScrollComponent]
})
export class ScrollModule { }
