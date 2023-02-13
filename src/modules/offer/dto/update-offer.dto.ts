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
  @Length(MIN_TITLE_LENGTH, MAX_TITLE_LENGTH, { message: `Title length must be between ${MIN_TITLE_LENGTH} and ${MAX_TITLE_LENGTH}` })
  public title?: string;

  @IsOptional()
  @Length(MIN_DESCRIPTION_LENGTH, MAX_DESCRIPTION_LENGTH, { message: `Description length must be between ${MIN_DESCRIPTION_LENGTH} and ${MAX_DESCRIPTION_LENGTH}` })
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
  @ArrayMinSize(PICTURES_QUANTITY, { message: `Minimum must be ${PICTURES_QUANTITY} pictures` })
  @ArrayMaxSize(PICTURES_QUANTITY, { message: `Maximum must be ${PICTURES_QUANTITY} pictures` })
  public images?: string[];

  @IsOptional()
  @IsBoolean({ message: 'Field isPremium must be a boolean type' })
  public isPremium?: boolean;

  @IsOptional()
  @Min(MIN_RATING, { message: `Minimum rating must be ${MIN_RATING}` })
  @Max(MAX_RATING, { message: `Maximum rating must be ${MAX_RATING}` })
  public rating?: number;

  @IsOptional()
  @IsEnum(HouseType, { message: 'Type must be specific value' })
  public type?: HouseType;

  @IsOptional()
  @IsInt({ message: 'Bedrooms must be integer type' })
  @Min(MIN_BEDROOMS, { message: `Minimum bedrooms must be ${MIN_BEDROOMS}` })
  @Max(MAX_BEDROOMS, { message: `Maximum bedrooms must be ${MAX_BEDROOMS}` })
  public bedrooms?: number;

  @IsOptional()
  @IsInt({ message: 'MaxAdults must be integer type' })
  @Min(MIN_GUESTS, { message: `Minimum guests must be ${MIN_GUESTS}` })
  @Max(MAX_GUESTS, { message: `Maximum guests must be ${MAX_GUESTS}` })
  public maxAdults?: number;

  @IsOptional()
  @Min(MIN_PRICE, { message: `Minimum price must be ${MIN_PRICE}` })
  @Max(MAX_PRICE, { message: `Maximum price must be ${MAX_PRICE}` })
  public price?: number;

  @IsOptional()
  @IsArray({ message: 'Goods must be an array' })
  public goods?: string[];

  @IsOptional()
  @ValidateNested({ message: 'Coordinates must be specific format' })
  public coordinates?: Coordinate;
}
