import { Host} from '../../type/offer.js';
import typegoose, { getModelForClass, defaultClasses } from '@typegoose/typegoose';
import { createSHA256 } from '../../utils/common.js';

const { prop, modelOptions } = typegoose;

export interface UserEntity extends defaultClasses.Base { }

@modelOptions({
  schemaOptions: {
    collection: 'users'
  }
})

export class UserEntity extends defaultClasses.TimeStamps implements Host {
  constructor(data: Host) {
    super();
    this.hostName = data.hostName;
    this.email = data.email;
    this.avatarUrl = data.avatarUrl;
    this.isPro = data.isPro;
  }

    @prop({
      required: true,
      default: ''
    })
  public hostName!: string;

    @prop({
      unique: true,
      required: true,
      default: '' })
    public email!: string;

    @prop({ default: '' })
    public avatarUrl!: string;

    @prop({
      required: true,
      default: ''})
    private password!: string;

    public setPassword(password: string, salt: string) {
      this.password = createSHA256(password, salt);
    }

    public getPassword() {
      return this.password;
    }

  @prop({ required: true, default: false })
    public isPro!: boolean;
}

export const UserModel = getModelForClass(UserEntity);
