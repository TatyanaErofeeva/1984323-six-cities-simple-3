//import { Coordinates } from '../type/offer.js';
//import { Host} from '../type/offer.js';
import { HouseType } from '../type/house-type.enum.js';

export const generateRandomValue = (min: number, max: number, numAfterDigit = 0) =>
  +((Math.random() * (max - min)) + min).toFixed(numAfterDigit);

export const getRandomItems = <T>(items: T[]): T[] => {
  const startPosition = generateRandomValue(0, items.length - 1);
  const endPosition = startPosition + generateRandomValue(startPosition, items.length);
  return items.slice(startPosition, endPosition);
};

export const getRandomItem = <T>(items: T[]): T =>
  items[generateRandomValue(0, items.length - 1)];

export const getRandomBoolean = () => {
  const randomInt = getRandomItem([0, 1]);
  return Boolean(randomInt);
};


// export const getCoordinates = (value: string): Coordinates => {
//   const [latitude, longitude] = value.split(';');

//   return [Number(latitude), Number(longitude)];
// };

// export const getHost = (value: string): Host => {
//   const [hostName, email, avatarUrl] = value.split(';');

//   return {
//     hostName,
//     email,
//     avatarUrl,
//     isPro: getRandomBoolean()
//   };
// };

export const getHouseType = (value: string): HouseType => {
  const correctType = value[0].toUpperCase() + value.slice(1);

  return HouseType[correctType as keyof typeof HouseType];
};

