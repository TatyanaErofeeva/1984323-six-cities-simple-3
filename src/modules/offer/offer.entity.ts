import typegoose, { getModelForClass, defaultClasses, Ref } from '@typegoose/typegoose';
import { CityType } from '../../type/city-type.enam.js';
import { HouseType } from '../../type/house-type.enum.js';
import { UserEntity } from '../user/user.entity.js';
import { Coordinate } from '../../type/coordinates.type.js';

const { prop, modelOptions } = typegoose;

export interface OfferEntity extends defaultClasses.Base { }

@modelOptions({
  schemaOptions: {
    collection: 'offer'
  }
})
export class OfferEntity extends defaultClasses.TimeStamps {
    @prop({
      required: true,
      trim: true,
      default: '' })
  public title!: string;

    @prop({
      required: true,
      trim: true })
    public description!: string;

    @prop({ required: true, default: new Date() })
    public date!: Date;

    @prop({
      required: true,
      type: () => String,
      enum: CityType,
      default: '' })
    public city!: CityType;

    @prop({default: '' })
    public previewImage!: string;

    @prop({ required: true, default: [] })
    public images!: string[];

    @prop({ required: true, default: false })
    public isPremium!: boolean;

    @prop({ required: true, default: 0 })
    public rating!: number;

    @prop({
      required: true,
      type: () => String,
      enum: HouseType
    })
    public type!: HouseType;

    @prop({ required: true, default: 0 })
    public bedrooms!: number;

    @prop({ required: true, default: 0 })
    public maxAdults!: number;

    @prop({ required: true, default: 0 })
    public price!: number;

    @prop({ required: true, default: '' })
    public goods!: string[];

    @prop({ required: true, default: 0 })
    public commentsAmount!: number;

  @prop({ required: true })
    public coordinates!: Coordinate;

    @prop({
      ref: UserEntity,
      required: true
    })
  public userId!: Ref<UserEntity>;
}

export const OfferModel = getModelForClass(OfferEntity);
