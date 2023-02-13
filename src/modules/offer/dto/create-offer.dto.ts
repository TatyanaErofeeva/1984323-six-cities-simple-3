import { CityType } from '../../../type/city-type.enam.js';
import { HouseType } from '../../../type/house-type.enum.js';
import { Coordinate } from '../../../type/coordinates.type.js';
import {
  MIN_DESCRIPTION_LENGTH,
  MAX_DESCRIPTION_LENGTH,
  MIN_TITLE_LENGTH,
  MAX_TITLE_LENGTH,
  MIN_RATING,
  MAX_RATING,
  MIN_BEDROOMS,
  MAX_BEDROOMS,
  MIN_GUESTS,
  MAX_GUESTS,
  MIN_PRICE,
  MAX_PRICE
} from '../../modules.constant.js';
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsInt,
  Max,
  MaxLength,
  Min,
  MinLength,
  IsBoolean,
  ValidateNested
} from 'class-validator';

export default class CreateOfferDto {

  @MinLength(MIN_TITLE_LENGTH, { message: 'Minimum title length must be 10' })
  @MaxLength(MAX_TITLE_LENGTH, { message: 'Maximum title length must be 100' })
  public title!: string;

  @MinLength(MIN_DESCRIPTION_LENGTH, { message: 'Minimum description length must be 20' })
  @MaxLength(MAX_DESCRIPTION_LENGTH, { message: 'Maximum description length must be 1024' })
  public description!: string;

  @IsDateString({}, { message: 'date must be valid ISO date' })
  public date!: Date;

  @IsEnum(CityType, { message: 'city must be Amsterdam / Paris / Cologne / Brussels / Hamburg / Dusseldorf' })
  public city!: CityType;

  @IsArray({ message: 'Field pictures must be an array' })
  public images!: string[];

  @IsBoolean({ message: 'Field isPremium must be a boolean' })
  public isPremium!: boolean;

  @Min(MIN_RATING, { message: 'Minimum rating is 1' })
  @Max(MAX_RATING, { message: 'Maximum rating is 5' })
  public rating!: number;

  @IsEnum(HouseType, { message: 'type must be Apartment, or House, or Room, or Hotel' })
  public type!: HouseType;

  @IsInt({ message: 'Bedrooms must be an integer' })
  @Min(MIN_BEDROOMS, { message: 'Minimum bedrooms is 1' })
  @Max(MAX_BEDROOMS, { message: 'Maximum bedrooms is 8' })
  public bedrooms!: number;

  @IsInt({ message: 'maxAdults must be an integer' })
  @Min(MIN_GUESTS, { message: 'Minimum guests is 1' })
  @Max(MAX_GUESTS, { message: 'Maximum guests is 10' })
  public maxAdults!: number;

  @IsInt({ message: 'Price must be an integer' })
  @Min(MIN_PRICE, { message: 'Minimum price is 100' })
  @Max(MAX_PRICE, { message: 'Maximum price is 100000' })
  public price!: number;

  @IsArray({ message: 'Field goods must be an array' })
  public goods!: string[];

  @ValidateNested({ message: 'Coordinate must be specific format' })
  public coordinates!:Coordinate;

  public userId!: string;
}
