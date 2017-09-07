import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from '@angular/flex-layout';

import { 
  MdSidenavModule,
  MdListModule,
  MdTooltipModule,
  MdSelectModule,
  MdMenuModule,
  MdSnackBarModule,
  MdToolbarModule,
  MdIconModule,
  MdButtonModule,
  MdCardModule
} from '@angular/material';
import { LayoutComponent } from './layout/layout.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MdSidenavModule,
    MdListModule,
    MdTooltipModule,
    MdSelectModule,
    MdMenuModule,
    MdSnackBarModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule
  ],
  declarations: [LayoutComponent, BreadcrumbComponent]
})
export class AppCommonModule { }
