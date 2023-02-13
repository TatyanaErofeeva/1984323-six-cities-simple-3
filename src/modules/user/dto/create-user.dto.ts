import { IsEmail, IsString, Length } from 'class-validator';
import {MIN_HOSTNAME_LENGTH,
  MAX_HOSTNAME_LENGTH,
  MIN_PASSWORD_LENGTH,
  MAX_PASSWORD_LENGTH
} from '../../modules.constant';

export default class CreateUserDto {

  @IsString({ message: 'HostName is required' })
  @Length(MIN_HOSTNAME_LENGTH, MAX_HOSTNAME_LENGTH, { message: `HostName length must be between ${MIN_HOSTNAME_LENGTH} and ${MAX_HOSTNAME_LENGTH}` })
  public hostName!: string;

  @IsEmail({}, { message: 'Email must be vallid address' })
  public email!: string;

  @IsString({ message: 'Password is required' })
  @Length(MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH, { message: `Password length must be between ${MIN_PASSWORD_LENGTH} and ${MAX_PASSWORD_LENGTH}` })
  public password!: string;

  public isPro!: boolean;
}
