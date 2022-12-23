import { HouseType } from '../type/house-type.enum.js';

export const getHouseType = (value: string): HouseType => {
  const correctType = value[0].toUpperCase() + value.slice(1);

  return HouseType[correctType as keyof typeof HouseType];
};
