import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { DynmapErrorComponent } from './dynmap-error/dynmap-error.component';



@NgModule({
  declarations: [
    HomepageComponent,
    DynmapErrorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
