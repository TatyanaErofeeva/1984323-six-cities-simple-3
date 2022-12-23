import { Coordinates } from '../type/offer.js';
import { Host, HostType } from '../type/offer.js';
import { HouseType } from '../type/house-type.enum.js';

export const getCoordinates = (value: string): Coordinates => {
  const [latitude, longitude] = value.split(';');

  return [Number(latitude), Number(longitude)];
};

export const getHost = (value: string): Host => {
  const [hostName, email, avatarUrl, password, isPro] = value.split(';');

  return {
    hostName,
    email,
    avatarUrl,
    password,
    isPro: HostType[isPro as keyof typeof HostType]
  };
};

export const getHouseType = (value: string): HouseType => {
  const correctType = value[0].toUpperCase() + value.slice(1);

  return HouseType[correctType as keyof typeof HouseType];
};
