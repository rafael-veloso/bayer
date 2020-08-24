import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainLayoutComponent } from './layout/components/main-layout/main-layout.component';
import { AppMaterialModule } from '../material-module';
import { FarmerSearchModule } from './farmer-search/farmer-search.module';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule
  ],
  exports: [
    AppMaterialModule,
    FarmerSearchModule
  ]
})
export class SharedModule { }
