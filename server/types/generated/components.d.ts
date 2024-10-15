import type { Struct, Schema } from '@strapi/strapi';

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: '';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    logoText: Schema.Attribute.Component<'elements.link', false>;
    ctaButton: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    logoText: Schema.Attribute.Component<'elements.link', false>;
    text: Schema.Attribute.String;
    socialLink: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface LayoutFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_features_sections';
  info: {
    displayName: 'Features Section';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'elements.feature', true>;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    url: Schema.Attribute.String;
    text: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ElementsFeature extends Struct.ComponentSchema {
  collectionName: 'components_elements_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      ['CLOCK_ICON', 'CHECK_ICON', 'CLOUD_ICON']
    >;
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.hero-section': LayoutHeroSection;
      'layout.header': LayoutHeader;
      'layout.footer': LayoutFooter;
      'layout.features-section': LayoutFeaturesSection;
      'elements.link': ElementsLink;
      'elements.feature': ElementsFeature;
    }
  }
}
