import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { InitialComponent } from './initial/component/initial.component';
import { FarmerComponent } from './farmer/component/farmer/farmer.component';

@NgModule({
  declarations: [InitialComponent, FarmerComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
