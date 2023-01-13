import { HouseType } from './house-type.enum';
import { CityType } from './city-type.enam';

export type Host = {
  hostName: string;
  email: string;
  avatarUrl: string;
  isPro: boolean;
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
  latitude: number,
  longitude: number,
}

export type Offers = Offer[];
