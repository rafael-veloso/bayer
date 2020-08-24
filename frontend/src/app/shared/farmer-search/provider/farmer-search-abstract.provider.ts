import { Farmer } from '../model/Farmer';

export interface SearchParams {
  nameOrDocument: string;
}

export declare abstract class FarmerSearchAbstractProvider {

  abstract searchFarmers(params: SearchParams): Promise<Farmer[]>;

}
