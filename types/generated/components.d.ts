import type { Schema, Attribute } from '@strapi/strapi';

export interface BrandsPartnerBrandsPartner extends Schema.Component {
  collectionName: 'components_brands_partner_brands_partners';
  info: {
    displayName: 'Brands Partner';
    icon: 'crown';
    description: '';
  };
  attributes: {
    brand_logo: Attribute.Media & Attribute.Required;
  };
}

export interface CardBannerCardBanner extends Schema.Component {
  collectionName: 'components_card_banner_card_banners';
  info: {
    displayName: 'Card Banner';
    icon: 'discuss';
    description: '';
  };
  attributes: {
    card_bg_image: Attribute.Media & Attribute.Required;
    card_name: Attribute.String & Attribute.Required & Attribute.Unique;
    card_image: Attribute.Media & Attribute.Required;
  };
}

export interface FaqsFaqs extends Schema.Component {
  collectionName: 'components_faqs_faqs';
  info: {
    displayName: 'Faqs';
    icon: 'envelop';
  };
  attributes: {
    question: Attribute.Text & Attribute.Required;
    answer: Attribute.Text & Attribute.Required;
  };
}

export interface LandingBenefitsBenefits extends Schema.Component {
  collectionName: 'components_benefits_benefits';
  info: {
    displayName: 'Landing Benefits';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    benefit_images: Attribute.Media & Attribute.Required;
  };
}

export interface RewardingBannerRewardingBanner extends Schema.Component {
  collectionName: 'components_rewarding_banner_rewarding_banners';
  info: {
    displayName: 'Rewarding Banner';
    icon: 'book';
    description: '';
  };
  attributes: {
    rewTitle: Attribute.String & Attribute.Required;
    rewInformation: Attribute.Text & Attribute.Required;
    rewIcons: Attribute.Media & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'brands-partner.brands-partner': BrandsPartnerBrandsPartner;
      'card-banner.card-banner': CardBannerCardBanner;
      'faqs.faqs': FaqsFaqs;
      'landing-benefits.benefits': LandingBenefitsBenefits;
      'rewarding-banner.rewarding-banner': RewardingBannerRewardingBanner;
    }
  }
}
