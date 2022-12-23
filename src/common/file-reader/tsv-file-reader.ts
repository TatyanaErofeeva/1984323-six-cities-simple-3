import { readFileSync } from 'fs';
import { FileReaderInterface } from './file-reader.interface.js';
import { Offer } from '../../type/offer.js';
import { CityType } from '../../type/city-type.enam.js';
import { getHost } from '../../utils/getHost.js';
import { getCoordinates } from '../../utils/getCoordinates.js';
import { getHouseType } from '../../utils/getHousetype.js';

export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) { }

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(([title, description, date, city, previewImage, images, isPremium, rating, type, bedrooms,
        maxAdults, price, goods, isPro, commentsAmount, location]) => ({
        title,
        description,
        date: new Date(date),
        city: CityType[city as keyof typeof CityType],
        previewImage,
        images: images.split(','),
        isPremium: Boolean(Number(isPremium)),
        rating:Number(rating),
        type: getHouseType(type),
        bedrooms:  Number(bedrooms),
        maxAdults:  Number(maxAdults),
        price:  Number(price),
        goods: goods.split(','),
        host: getHost(isPro),
        commentsAmount: Number(commentsAmount),
        location: getCoordinates(location)
      }));
  }
}
