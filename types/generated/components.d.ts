import type { Schema, Attribute } from '@strapi/strapi';

export interface GlobalButton extends Schema.Component {
  collectionName: 'components_global_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    type: Attribute.Enumeration<['isPrimary', 'isOutlined', 'normal']>;
  };
}

export interface GlobalFooterColumn extends Schema.Component {
  collectionName: 'components_global_footer_columns';
  info: {
    displayName: 'Footer Column';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    menuName: Attribute.Component<'navigation.footer-menu-item', true> &
      Attribute.Required;
  };
}

export interface GlobalTitleAndDescription extends Schema.Component {
  collectionName: 'components_global_title_and_descriptions';
  info: {
    displayName: 'titleAndDescription';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface NavigationFooterMenuItem extends Schema.Component {
  collectionName: 'components_navigation_footer_menu_items';
  info: {
    displayName: 'Footer Menu Item';
    description: '';
  };
  attributes: {
    menuName: Attribute.String;
  };
}

export interface NavigationMenuItems extends Schema.Component {
  collectionName: 'components_navigation_menu_items';
  info: {
    displayName: 'Menu items';
  };
  attributes: {
    menuName: Attribute.String & Attribute.Required;
  };
}

export interface SectionsAbout extends Schema.Component {
  collectionName: 'components_sections_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    heading: Attribute.String;
    image: Attribute.Media<'images'>;
    contents: Attribute.Component<'global.title-and-description', true>;
  };
}

export interface SectionsFeatures extends Schema.Component {
  collectionName: 'components_sections_features';
  info: {
    displayName: 'Features';
  };
  attributes: {
    bgImage: Attribute.Media<'images'>;
    image: Attribute.Media<'images'>;
    feature: Attribute.Component<'global.title-and-description'>;
  };
}

export interface SectionsFooter extends Schema.Component {
  collectionName: 'components_sections_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    logo: Attribute.Media<'images'>;
    footerColumns: Attribute.Component<'global.footer-column', true>;
  };
}

export interface SectionsHeader extends Schema.Component {
  collectionName: 'components_sections_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    logo: Attribute.Media<'images'>;
    menuLinks: Attribute.Component<'navigation.menu-items', true>;
    buttons: Attribute.Component<'global.button', true>;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    buttons: Attribute.Component<'global.button', true>;
    bgImage: Attribute.Media<'images'>;
  };
}

export interface SectionsMoreFeatures extends Schema.Component {
  collectionName: 'components_sections_more_features';
  info: {
    displayName: 'More Features';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    moreFeatures: Attribute.Component<'global.title-and-description', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'global.button': GlobalButton;
      'global.footer-column': GlobalFooterColumn;
      'global.title-and-description': GlobalTitleAndDescription;
      'navigation.footer-menu-item': NavigationFooterMenuItem;
      'navigation.menu-items': NavigationMenuItems;
      'sections.about': SectionsAbout;
      'sections.features': SectionsFeatures;
      'sections.footer': SectionsFooter;
      'sections.header': SectionsHeader;
      'sections.hero': SectionsHero;
      'sections.more-features': SectionsMoreFeatures;
    }
  }
}
