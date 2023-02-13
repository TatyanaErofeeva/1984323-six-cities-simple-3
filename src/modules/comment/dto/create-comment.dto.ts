import { IsMongoId, IsString, Length, Max, Min } from 'class-validator';
import { MIN_TEXT_LENGTH, MAX_TEXT_LENGTH, MIN_RATING, MAX_RATING } from '../../modules.constant';

export default class CreateCommentDto {

  @IsString({ message: 'text is required' })
  @Length(MIN_TEXT_LENGTH, MAX_TEXT_LENGTH, { message: 'Min length is 5, max is 1024' })
  public text!: string;

  @IsMongoId({ message: 'offerId field must be a valid id' })
  public offerId!: string;

  public userId!: string;

  @Min(MIN_RATING, { message: 'Minimum rating must be 1' })
  @Max(MAX_RATING, { message: 'Maximum rating must be 5' })
  public rating!: number;
}
