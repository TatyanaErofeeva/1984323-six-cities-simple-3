import { Coordinates } from '../type/offer.js';

export const getCoordinates = (value: string): Coordinates => {
  const [latitude, longitude] = value.split(';');

  return [Number(latitude), Number(longitude)];
};
