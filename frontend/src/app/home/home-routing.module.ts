import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitialComponent } from './initial/component/initial.component';
import { MainLayoutComponent } from '../shared/layout/components/main-layout/main-layout.component';
import { FarmerComponent } from './farmer/component/farmer/farmer.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: InitialComponent},
      {path: 'farmer', component: FarmerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
