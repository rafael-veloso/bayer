import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Farmer } from '../model/Farmer';
import { FarmerSearchAbstractProvider, SearchParams } from './farmer-search-abstract.provider';
import { environment } from 'src/environments/environment';

@Injectable()
export class FarmerSearchHttpProvider implements FarmerSearchAbstractProvider {

  private readonly apiContext = `${environment.endpoint}/farmers`;

  constructor(private http: HttpClient) {}

  searchFarmers(params: SearchParams): Promise<Farmer[]> {
    const parmasObj: any = params;
    return this.http.get<Farmer[]>(this.apiContext, {params: parmasObj}).toPromise();
  }

}
