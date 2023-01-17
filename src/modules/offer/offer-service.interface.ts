import { DocumentType } from '@typegoose/typegoose';
import CreateOfferDto from './dto/create-offer.dto.js';
import { OfferEntity } from './offer.entity.js';
import UpdateOfferDto from './dto/update-offer.dto.js';

export interface OfferServiceInterface {
    create(dto: CreateOfferDto): Promise<DocumentType<OfferEntity>>;
    findById(OfferId: string): Promise<DocumentType<OfferEntity> | null>;
    find(): Promise<DocumentType<OfferEntity>[]>;
    deleteById(offerId: string): Promise<DocumentType<OfferEntity> | null>;
    updateById(offerId: string, dto: UpdateOfferDto): Promise<DocumentType<OfferEntity> | null>;
    incCommentCount(offerId: string): Promise<DocumentType<OfferEntity> | null>;
    getRatingCalculation(offerId: string, rating: number): Promise<DocumentType<OfferEntity> | null>;
}
