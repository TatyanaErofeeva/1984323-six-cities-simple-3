import { Expose } from 'class-transformer';
import { CityType } from '../../../type/city-type.enam.js';
import { HouseType } from '../../../type/house-type.enum.js';

export default class OfferResponse {
  @Expose()
    title!: string;

  @Expose()
    description!: string;

  @Expose()
    date!: string;

  @Expose()
    city!: CityType;

  @Expose()
    previewImage!: string;

  @Expose()
    images!: string[];

  @Expose()
    isPremium!: boolean;

  @Expose()
    rating!: number;

  @Expose()
    type!: HouseType;

  @Expose()
    bedrooms!: number;

  @Expose()
    maxAdults!: number;

  @Expose()
    price!: number;

  @Expose()
    goods!: string[];

  @Expose()
    userId!: string;

  @Expose()
    commentsAmount!: number;

  @Expose()
    latitude!: number;

  @Expose()
    longitude!: number;
}
