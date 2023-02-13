import { CityType } from '../../../type/city-type.enam.js';
import { HouseType } from '../../../type/house-type.enum.js';
import { Coordinate } from '../../../type/coordinates.type.js';
import { ArrayMaxSize, ArrayMinSize, IsArray, IsBoolean, IsDateString, IsEnum, IsInt, IsOptional, IsString, Length, Max, Min, ValidateNested } from 'class-validator';
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
  MAX_PRICE,
  PICTURES_QUANTITY } from '../../modules.constant.js';
export default class UpdateOfferDto {

  @IsOptional()
  @Length(MIN_TITLE_LENGTH, MAX_TITLE_LENGTH, { message: 'Title length must be between 10 and 100' })
  public title?: string;

  @IsOptional()
  @Length(MIN_DESCRIPTION_LENGTH, MAX_DESCRIPTION_LENGTH, { message: 'Description length must be between 20 and 1024' })
  public description?: string;

  @IsOptional()
  @IsDateString({}, { message: 'Date must be valid ISO date' })
  public date?: Date;

  @IsOptional()
  public city?: CityType;

  @IsOptional()
  @IsString({ message: 'Preview image is required' })
  public previewImage?: string;

  @IsOptional()
  @IsArray({ message: 'Images must be array' })
  @ArrayMinSize(PICTURES_QUANTITY, { message: 'Minimum must be 6 pictures' })
  @ArrayMaxSize(PICTURES_QUANTITY, { message: 'Maximum must be 6 pictures' })
  public images?: string[];

  @IsOptional()
  @IsBoolean({ message: 'Field isPremium must be a boolean type' })
  public isPremium?: boolean;

  @IsOptional()
  @Min(MIN_RATING, { message: 'Minimum rating must be 1' })
  @Max(MAX_RATING, { message: 'Maximum rating must be 5' })
  public rating?: number;

  @IsOptional()
  @IsEnum(HouseType, { message: 'Type must be specific value' })
  public type?: HouseType;

  @IsOptional()
  @IsInt({ message: 'Bedrooms must be integer type' })
  @Min(MIN_BEDROOMS, { message: 'Minimum bedrooms must be 1' })
  @Max(MAX_BEDROOMS, { message: 'Maximum bedrooms must be 8' })
  public bedrooms?: number;

  @IsOptional()
  @IsInt({ message: 'MaxAdults must be integer type' })
  @Min(MIN_GUESTS, { message: 'Minimum guests must be 1' })
  @Max(MAX_GUESTS, { message: 'Maximum guests must be 10' })
  public maxAdults?: number;

  @IsOptional()
  @Min(MIN_PRICE, { message: 'Minimum price must be 100' })
  @Max(MAX_PRICE, { message: 'Maximum price must be 100 000' })
  public price?: number;

  @IsOptional()
  @IsArray({ message: 'Goods must be an array' })
  public goods?: string[];

  @IsOptional()
  @ValidateNested({ message: 'Coordinates must be specific format' })
  public coordinates?: Coordinate;
}
