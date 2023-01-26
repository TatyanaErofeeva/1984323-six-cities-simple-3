import { inject, injectable } from 'inversify';
import { DocumentType, types } from '@typegoose/typegoose';
import { OfferServiceInterface } from './offer-service.interface.js';
import { OfferEntity } from './offer.entity.js';
import { LoggerInterface } from '../../common/logger/logger.interface.js';
import { Component } from '../../type/component.type.js';
import CreateOfferDto from './dto/create-offer.dto.js';
import UpdateOfferDto from './dto/update-offer.dto.js';
import { SortType } from '../../type/sort-type.enum.js';
import { DEFAULT_OFFER_COUNT } from './offer.constant.js';

@injectable()
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

  public async exists(documentId: string): Promise<boolean> {
    return (await this.OfferModel
      .exists({ _id: documentId })) !== null;
  }

  public async findById(OfferId: string): Promise<DocumentType<OfferEntity> | null> {
    return this.OfferModel
      .findById(OfferId)
      .populate(['userId'])
      .exec();
  }


  public async find(): Promise<DocumentType<OfferEntity>[]> {
    return this.OfferModel
      .aggregate([
        {
          $lookup: {
            from: 'comments',
            let: { commentsId: '$_id' },
            pipeline: [
              { $match: { $expr: { $in: ['$$commentsId', '$countComment'] } } },
              { $project: { _id: 1 } }
            ],
            as: 'comments'
          },
        },
        {
          $addFields:
          {
            id: { $toString: '$_id' },
            countComment: { $size: '$comments' }
          }
        },
        { $limit: DEFAULT_OFFER_COUNT },
        { $unset: 'comments' },
        { $sort: { countComment: SortType.Down } }
      ]).exec();
  }

  public async deleteById(offerId: string): Promise<DocumentType<OfferEntity> | null> {
    return this.OfferModel
      .findByIdAndDelete(offerId)
      .exec();
  }

  public async updateById(offerId: string, dto: UpdateOfferDto): Promise<DocumentType<OfferEntity> | null> {
    return this.OfferModel
      .findByIdAndUpdate(offerId, dto, { new: true })
      .populate(['userId'])
      .exec();
  }

  public async incCommentCount(offerId: string): Promise<DocumentType<OfferEntity> | null> {
    return this.OfferModel
      .findByIdAndUpdate(offerId, { '$inc': { commentsQuantity: 1, } }).exec();
  }

  public async getRatingCalculation(offerId: string, rating: number): Promise<DocumentType<OfferEntity> | null> {
    const offer = await this.OfferModel.findById(offerId);

    const prevRating = offer ? offer.rating : 0;
    return this.OfferModel
      .findByIdAndUpdate(offerId, {
        '$set': {
          rating: ((prevRating + rating) / 2).toFixed(1),
        }
      }).exec();
  }
}
