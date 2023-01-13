import { inject, injectable } from 'inversify';
import { DocumentType, types } from '@typegoose/typegoose';
import { OfferServiceInterface } from './offer-service.interface.js';
import { OfferEntity } from './offer.entity.js';
import { LoggerInterface } from '../../common/logger/logger.interface.js';
import { Component } from '../../type/component.type.js';
import CreateOfferDto from './dto/create-offer.dto.js';

injectable();
export default class OfferService implements OfferServiceInterface {
  constructor(
        @inject(Component.LoggerInterface) private logger: LoggerInterface,
        @inject(Component.OfferModel) private readonly OfferModel: types.ModelType<OfferEntity>
  ) { }

  public async create(dto: CreateOfferDto): Promise<DocumentType<OfferEntity>> {

    const result = await this.OfferModel.create(dto);
    this.logger.info(`New offer created: ${dto.title}`);

    return result;
  }

  public async findById(OfferId: string): Promise<DocumentType<OfferEntity> | null> {
    return this.OfferModel.findById(OfferId).exec();
  }
}
