export interface Collection {
    name: string;
    id: string;
    image: string;
    floorPrice: number | null;
    topBid: number | null;
    "1DChange":number  | null;
    "7DChange":number | null;
    "1DVolume":number | null;
    "7DVolume":number | null;
    totalVolume:number | null;
    owners:number | null;
    supply:number | null;
  }