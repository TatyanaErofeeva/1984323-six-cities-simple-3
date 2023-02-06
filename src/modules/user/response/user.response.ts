import { Expose } from 'class-transformer';

export default class UserResponse {

   @Expose()
  public id!: string;

    @Expose()
   public hostName!: string;

    @Expose()
    public email!: string;

    @Expose()
    public avatarUrl!: string;


    @Expose()
    public isPro!: boolean;
}
