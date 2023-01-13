import dayjs from 'dayjs';
import { MockData } from '../../type/mock-data.type.js';
import { HouseType } from '../../type/house-type.enum.js';
import { generateRandomValue, getRandomItems, getRandomItem, getRandomBoolean} from '../../utils/utils.js';
import { OfferGeneratorInterface } from './offer-generator.interface.js';
import { CityType } from '../../type/city-type.enam.js';
//import { HostType } from '../../type/offer.js';
//import { Coordinates } from '../../type/offer.js';

export default class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockData) { }

  public generate(): string {
    //const arr = [];
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const date = dayjs().subtract(generateRandomValue(1, 7), 'day').toISOString();
    const city = getRandomItem(Object.values(CityType));
    const previewImage = getRandomItem<string>(this.mockData.previewImages);
    const images = getRandomItems<string>(this.mockData.images);
    const isPremium = getRandomBoolean();
    const rating = generateRandomValue(1, 5, 1);
    const type = getRandomItem(Object.values(HouseType));
    const bedrooms = generateRandomValue(1, 4);
    const maxAdults = generateRandomValue(1, 8);
    const price = generateRandomValue(100, 10000);
    const goods = getRandomItems<string>(this.mockData.goods);
    const commentsAmount = generateRandomValue(0, 100);
    const hostName = getRandomItem<string>(this.mockData.hosts);
    const email = getRandomItem<string>(this.mockData.emails);
    const avatarURL = getRandomItem<string>(this.mockData.avatarURLs);
    //const password = Math.random().toString(36).slice(-8);
    //const isPro = getRandomItem(Object.keys(HostType));
    const isPro = getRandomBoolean();
    //arr.push(hostName, email, avatarURL, password, isPro);
    //const host = arr.join(';');
    const latitude = generateRandomValue(0, 90, 6);
    const longitude = generateRandomValue(0, 180, 6);

    return [
      title, description, date, city,
      previewImage, images, isPremium, rating,
      type, bedrooms, maxAdults, price,
      goods, hostName, email, avatarURL, isPro, commentsAmount, latitude, longitude
    ].join('\t');
  }
}
