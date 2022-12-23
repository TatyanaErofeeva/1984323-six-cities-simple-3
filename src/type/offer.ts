import { HouseType } from './house-type.enum';
import { CityType } from './city-type.enam';

export enum HostType {
  Usual = 'обычный',
  Pro = 'pro',
}

export type Coordinates = [number, number];

export type Host = {
  hostName: string;
  email: string;
  avatarUrl: string;
  password: string;
  isPro: HostType;
  }

export type Offer = {
  title:string;
  description: string;
  date: Date;
  city: CityType;
  previewImage: string;
  images: string[];
  isPremium: boolean;
  rating: number;
  type: HouseType;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: Host;
  commentsAmount: number;
  location: Coordinates;
}

export type Offers = Offer[];
