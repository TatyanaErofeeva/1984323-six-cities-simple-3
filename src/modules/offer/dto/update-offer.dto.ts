import { CityType } from '../../../type/city-type.enam.js';
import { HouseType } from '../../../type/house-type.enum.js';
import { Coordinate } from '../../../type/coordinates.type.js';
import { ArrayMaxSize, ArrayMinSize, IsArray, IsBoolean, IsDateString, IsEnum, IsInt, IsOptional, IsString, Length, Max, Min, ValidateNested } from 'class-validator';

export default class UpdateOfferDto {

  @IsOptional()
  @Length(10, 100, { message: 'Title length must be between 10 and 100' })
  public title?: string;

  @IsOptional()
  @Length(10, 100, { message: 'Description length must be between 10 and 100' })
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
  @ArrayMinSize(6, { message: 'Minimum must be 6 pictures' })
  @ArrayMaxSize(6, { message: 'Maximum must be 6 pictures' })
  public images?: string[];

  @IsOptional()
  @IsBoolean({ message: 'Field isPremium must be a boolean type' })
  public isPremium?: boolean;

  @IsOptional()
  @Min(1, { message: 'Minimum rating must be 1' })
  @Max(5, { message: 'Maximum rating must be 5' })
  public rating?: number;

  @IsOptional()
  @IsEnum(HouseType, { message: 'Type must be specific value' })
  public type?: HouseType;

  @IsOptional()
  @IsInt({ message: 'Bedrooms must be integer type' })
  @Min(1, { message: 'Minimum bedrooms must be 1' })
  @Max(8, { message: 'Maximum bedrooms must be 8' })
  public bedrooms?: number;

  @IsOptional()
  @IsInt({ message: 'MaxAdults must be integer type' })
  @Min(1, { message: 'Minimum guests must be 1' })
  @Max(10, { message: 'Maximum guests must be 10' })
  public maxAdults?: number;

  @IsOptional()
  @Min(100, { message: 'Minimum price must be 100' })
  @Max(100000, { message: 'Maximum price must be 100 000' })
  public price?: number;

  @IsOptional()
  @IsArray({ message: 'Goods must be an array' })
  public goods?: string[];

  @IsOptional()
  @ValidateNested({ message: 'Coordinates must be specific format' })
  public coordinates?: Coordinate;
}
