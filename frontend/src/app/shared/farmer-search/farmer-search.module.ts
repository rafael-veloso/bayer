import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FarmerSearchComponent } from './component/farmer-search/farmer-search.component';
import { AppMaterialModule } from 'src/app/material-module';
import { FarmerSearchOptionsComponent } from './component/farmer-search-options/farmer-search-options.component';

@NgModule({
  declarations: [FarmerSearchComponent, FarmerSearchOptionsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],
  exports: [
    FarmerSearchComponent
  ],
  entryComponents: [
    FarmerSearchOptionsComponent
  ]
})
export class FarmerSearchModule { }
