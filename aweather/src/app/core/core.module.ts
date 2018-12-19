import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import {MatToolbarModule, MatListModule, MatDividerModule} from '@angular/material';

@NgModule({
  declarations: [LeftMenuComponent, TopMenuComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule
  ],
  exports: [LeftMenuComponent, TopMenuComponent]
})
export class CoreModule { }
