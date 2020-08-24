import { Component, OnInit } from '@angular/core';
import { Farmer } from 'src/app/shared/farmer-search/model/Farmer';

@Component({
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.scss']
})
export class FarmerComponent {

  onFarmerSelected(farmer: Farmer) {
    console.log('ok');
    console.log(farmer);
  }

}
