import { CityType } from '../../../type/city-type.enam.js';
import { HouseType } from '../../../type/house-type.enum.js';
import { Coordinate } from '../../../type/coordinates.type.js';
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsInt,
  IsMongoId,
  Max,
  MaxLength,
  Min,
  MinLength,
  IsBoolean,
  ValidateNested
} from 'class-validator';

export default class CreateOfferDto {

  @MinLength(10, { message: 'Minimum title length must be 10' })
  @MaxLength(100, { message: 'Maximum title length must be 100' })
  public title!: string;

  @MinLength(20, { message: 'Minimum description length must be 20' })
  @MaxLength(1024, { message: 'Maximum description length must be 1024' })
  public description!: string;

  @IsDateString({}, { message: 'date must be valid ISO date' })
  public date!: Date;

  @IsEnum(CityType, { message: 'city must be Amsterdam / Paris / Cologne / Brussels / Hamburg / Dusseldorf' })
  public city!: CityType;

  @MaxLength(256, { message: 'Too short for field «previewImage»' })
  public previewImage!: string;

  @IsArray({ message: 'Field pictures must be an array' })
  public images!: string[];

  @IsBoolean({ message: 'Field isPremium must be a boolean' })
  public isPremium!: boolean;

  @Min(1, { message: 'Minimum rating is 1' })
  @Max(5, { message: 'Maximum rating is 5' })
  public rating!: number;

  @IsEnum(HouseType, { message: 'type must be Apartment, or House, or Room, or Hotel' })
  public type!: HouseType;

  @IsInt({ message: 'Bedrooms must be an integer' })
  @Min(1, { message: 'Minimum bedrooms is 1' })
  @Max(8, { message: 'Maximum bedrooms is 8' })
  public bedrooms!: number;

  @IsInt({ message: 'maxAdults must be an integer' })
  @Min(1, { message: 'Minimum guests is 1' })
  @Max(10, { message: 'Maximum guests is 10' })
  public maxAdults!: number;

  @IsInt({ message: 'Price must be an integer' })
  @Min(100, { message: 'Minimum price is 100' })
  @Max(100000, { message: 'Maximum price is 100000' })
  public price!: number;

  @IsArray({ message: 'Field goods must be an array' })
  public goods!: string[];

  @ValidateNested({ message: 'Coordinate must be specific format' })
  public coordinates!:Coordinate;

  @IsMongoId({ message: 'userId field must be valid an id' })
  public userId!: string;
}
