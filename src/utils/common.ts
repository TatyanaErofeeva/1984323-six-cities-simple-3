import { Offer } from '../type/offer.js';
import { CityType } from '../type/city-type.enam.js';
import { getHost } from './utils.js';
import { getCoordinates } from './utils.js';
import { getHouseType } from './utils.js';


export const createOffer = (row: string) => {
  const tokens = row.replace('\n', '').split('\t');
  const [title, description, date, city, previewImage, images, isPremium, rating, type, bedrooms,
    maxAdults, price, goods, isPro, commentsAmount, location] = tokens;
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
    host: getHost(isPro),
    commentsAmount: Number(commentsAmount),
    location: getCoordinates(location)
  } as Offer;
};

export const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : '';

