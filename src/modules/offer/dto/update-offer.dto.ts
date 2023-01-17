import { CityType } from '../../../type/city-type.enam.js';
import { HouseType } from '../../../type/house-type.enum.js';

export default class UpdateOfferDto {
  public title?: string;
  public description?: string;
  public date?: Date;
  public city?: CityType;
  public previewImage?: string;
  public images?: string[];
  public isPremium?: boolean;
  public rating?: number;
  public type?: HouseType;
  public bedrooms?: number;
  public maxAdults?: number;
  public price?: number;
  public goods?: string[];
  public latitude?: number;
  public longitude?: number;
}
