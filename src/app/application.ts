import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { LoggerInterface } from '../common/logger/logger.interface.js';
import { ConfigInterface } from '../common/config/config.interface.js';
import { Component } from '../type/component.type.js';
import { getURI } from '../utils/db.js';
import { DatabaseInterface } from '../common/database-client/database.interface.js';
import { OfferServiceInterface } from '../modules/offer/offer-service.interface.js';

@injectable()
export default class Application {
  constructor(
    @inject(Component.LoggerInterface) private logger: LoggerInterface,
    @inject(Component.ConfigInterface) private config: ConfigInterface,
    @inject(Component.DatabaseInterface) private databaseClient: DatabaseInterface,
    @inject(Component.OfferServiceInterface) private offerService: OfferServiceInterface
  ) { }

  public async init() {
    this.logger.info('Application initialization…');
    this.logger.info(`Get value from env $PORT: ${this.config.get('PORT')}`);

    const uri = getURI(
      this.config.get('DB_USER'),
      this.config.get('DB_PASSWORD'),
      this.config.get('DB_HOST'),
      this.config.get('DB_PORT'),
      this.config.get('DB_NAME'),
    );

    await this.databaseClient.connect(uri);

    const result = await this.offerService.findById('63c159343125b5b654d51dcc');
    console.log(result);
  }
}
