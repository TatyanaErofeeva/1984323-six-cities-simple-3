import { Host, HostType } from '../type/offer.js';

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
