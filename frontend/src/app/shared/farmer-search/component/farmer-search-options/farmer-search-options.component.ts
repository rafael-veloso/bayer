import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Farmer } from '../../model/Farmer';

@Component({
  selector: 'app-farmer-search-options',
  templateUrl: './farmer-search-options.component.html',
  styleUrls: ['./farmer-search-options.component.scss']
})
export class FarmerSearchOptionsComponent {

  constructor(
    private dialogRef: MatDialogRef<FarmerSearchOptionsComponent>,
    @Inject(MAT_DIALOG_DATA) public farmers: Farmer[]) {}

  select(farmer: Farmer): void {
    this.dialogRef.close(farmer);
  }

}
