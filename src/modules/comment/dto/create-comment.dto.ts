import { IsMongoId, IsString, Length, Max, Min } from 'class-validator';
import { MIN_TEXT_LENGTH, MAX_TEXT_LENGTH, MIN_RATING, MAX_RATING } from '../../modules.constant';

export default class CreateCommentDto {

  @IsString({ message: 'text is required' })
  @Length(MIN_TEXT_LENGTH, MAX_TEXT_LENGTH, { message: `Min length is ${MIN_TEXT_LENGTH}, max is ${MAX_TEXT_LENGTH}` })
  public text!: string;

  @IsMongoId({ message: 'offerId field must be a valid id' })
  public offerId!: string;

  public userId!: string;

  @Min(MIN_RATING, { message: `Minimum rating must be ${MIN_RATING}` })
  @Max(MAX_RATING, { message: `Maximum rating must be ${MAX_RATING}` })
  public rating!: number;
}
