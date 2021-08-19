import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComponent } from './a/a.component';
import { BtnComponent } from './btn/btn.component';



@NgModule({
  declarations: [
    AComponent,
    BtnComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AComponent,
    BtnComponent
  ]
})
export class ComponentsModule { }
