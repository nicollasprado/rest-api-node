export interface IGetCity {
  id: number;
  name: string;
}

export interface IGetManyCities {
  cities: IGetCity[];
}
