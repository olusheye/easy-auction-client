
export class Product {
  title: string;
  imgUrl: string;
  _id: string;
  priceRangeMin: number;
  priceRangeMax: number;
  currentBid?: number;
  bidEndTime: Date;
  productName: string;
  description: string;
  categoryId: number;

}
