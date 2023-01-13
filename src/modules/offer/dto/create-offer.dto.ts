import { CityType } from '../../../type/city-type.enam.js';
import { HouseType } from '../../../type/house-type.enum.js';
import { Host } from '../../../type/offer.js';
//import { Coordinates } from '../../../type/offer.js';

export default class CreateOfferDto {
  public title!: string;
  public description!: string;
  public date!: Date;
  public city!: CityType;
  public previewImage!: string;
  public images!: string[];
  public isPremium!: boolean;
  public rating!: number;
  public type!: HouseType;
  public bedrooms!: number;
  public maxAdults!: number;
  public price!: number;
  public goods!: string[];
  public host!: Host;
  public commentsAmount!: number;
  public latitude!: number;
  public longitude!: number;
  public userId!: string;
}
