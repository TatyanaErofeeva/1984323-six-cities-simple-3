import { CityType } from '../../../type/city-type.enam.js';
import { HouseType } from '../../../type/house-type.enum.js';
import UserResponse from '../../user/response/user.response.js';
import { Expose, Type } from 'class-transformer';

export default class OfferResponse {
  @Expose()
  public id!: string;

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

  @Expose({ name: 'userId' })
  @Type(() => UserResponse)
  public user!: UserResponse;

  @Expose()
    commentsAmount!: number;
}
