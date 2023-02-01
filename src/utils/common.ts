import * as jose from 'jose';
import { Offer } from '../type/offer.js';
import { CityType } from '../type/city-type.enam.js';
import { getHouseType } from './utils.js';
import crypto from 'crypto';
import { plainToInstance } from 'class-transformer';
import { ClassConstructor } from 'class-transformer/types/interfaces/class-constructor.type.js';


export const createOffer = (row: string) => {
  const tokens = row.replace('\n', '').split('\t');
  const [title, description, date, city, previewImage, images, isPremium, rating, type, bedrooms,
    maxAdults, price, goods, hostName, email, avatarUrl, isPro, commentsAmount, coordinates] = tokens;
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
    coordinates: JSON.parse(coordinates)
  } as Offer;
};

export const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : '';

export const createSHA256 = (line: string, salt: string): string => {
  const shaHasher = crypto.createHmac('sha256', salt);
  return shaHasher.update(line).digest('hex');
};

export const fillDTO = <T, V>(someDto: ClassConstructor<T>, plainObject: V) =>
  plainToInstance(someDto, plainObject, { excludeExtraneousValues: true });

export const createErrorObject = (message: string) => ({
  error: message,
});

export const createJWT = async (algoritm: string, jwtSecret: string, payload: object): Promise<string> =>
  new jose.SignJWT({ ...payload })
    .setProtectedHeader({ alg: algoritm })
    .setIssuedAt()
    .setExpirationTime('2d')
    .sign(crypto.createSecretKey(jwtSecret, 'utf-8'));

