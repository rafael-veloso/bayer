import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { Farmer } from '../../model/Farmer';
import { FarmerSearchHttpProvider } from '../../provider/farmer-search-http.provider';
import { FarmerSearchAbstractProvider } from '../../provider/farmer-search-abstract.provider';
import { FarmerSearchOptionsComponent } from '../farmer-search-options/farmer-search-options.component';

@Component({
  selector: 'farmer-search-card',
  templateUrl: './farmer-search.component.html',
  styleUrls: ['./farmer-search.component.scss'],
  providers: [
    FarmerSearchHttpProvider
  ]
})
export class FarmerSearchComponent implements OnInit {

  @Input() nameLabel = 'Name';

  @Input() farmerSearchAbstractProvider: FarmerSearchAbstractProvider;

  @Output() onFarmerSelectedEvent: EventEmitter<Farmer> = new EventEmitter<Farmer>();

  form = this.fb.group({
    searchParam: [''],
    name: [{value: '', disabled: true}],
    document: this.fb.group({
      documentNumber: [{value: '', disabled: true}]
    }),
    address: this.fb.group({
      address: [{value: '', disabled: true}]
    })
  });

  constructor(
    private fb: FormBuilder,
    private fsHttpProvider: FarmerSearchHttpProvider,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    if (this.farmerSearchAbstractProvider == null) {
      this.farmerSearchAbstractProvider = this.fsHttpProvider;
    }
  }

  onSearch(): void {
    this.farmerSearchAbstractProvider.searchFarmers({nameOrDocument: this.form.controls.searchParam.value})
      .then((farmers: Farmer[]) => {
        if ((!farmers || farmers.length === 0) || farmers.length > 1) {
          this.dialog.open(FarmerSearchOptionsComponent, {
            maxWidth: '400px',
            minWidth: '200px',
            data: farmers
          }).afterClosed().subscribe(farmer => {
            if (farmer != null) {
              this.form.patchValue(farmer);
              this.onFarmerSelectedEvent.emit(farmer);
            }
          });
        } else {
          const farmer = farmers[0];
          this.form.patchValue(farmer);
          this.onFarmerSelectedEvent.emit(farmer);
        }
      });
  }

}
