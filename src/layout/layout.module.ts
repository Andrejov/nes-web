import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { BackgroundComponent } from './background/background.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    SideNavComponent,
    BackgroundComponent,
    ContentComponent
  ],
  exports: [
    SideNavComponent,
    BackgroundComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule
  ]
})
export class LayoutModule { }
