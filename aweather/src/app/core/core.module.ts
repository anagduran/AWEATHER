import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import {MatToolbarModule, MatListModule, MatDividerModule} from '@angular/material';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LeftMenuComponent, TopMenuComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    SharedModule
  ],
  exports: [LeftMenuComponent, TopMenuComponent]
})
export class CoreModule { }
