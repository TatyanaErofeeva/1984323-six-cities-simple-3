import { Offer } from '../type/offer.js';
import { CityType } from '../type/city-type.enam.js';
//import { getCoordinates } from './utils.js';
import { getHouseType } from './utils.js';
import crypto from 'crypto';


export const createOffer = (row: string) => {
  const tokens = row.replace('\n', '').split('\t');
  const [title, description, date, city, previewImage, images, isPremium, rating, type, bedrooms,
    maxAdults, price, goods, hostName, email, avatarUrl, isPro, commentsAmount, latitude,
    longitude] = tokens;
  return {
    title,
    description,
    date: new Date(date),
    city: CityType[city as keyof typeof CityType],
    previewImage,
    images: images.split(','),
    isPremium: Boolean(Number(isPremium)),
    rating: Number(rating),
    type: getHouseType(type),
    bedrooms: Number(bedrooms),
    maxAdults: Number(maxAdults),
    price: Number(price),
    goods: goods.split(','),
    host: {
      hostName,
      email,
      avatarUrl,
      isPro: Boolean(isPro)
    },
    commentsAmount: Number(commentsAmount),
    latitude: Number.parseFloat(latitude),
    longitude: Number.parseFloat(longitude),
  } as Offer;
};

export const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : '';

export const createSHA256 = (line: string, salt: string): string => {
  const shaHasher = crypto.createHmac('sha256', salt);
  return shaHasher.update(line).digest('hex');
};

