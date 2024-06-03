"use strict";

/**
 * `homepage-middleware-populate` middleware
 */
const populate = {
  header: {
    populate: {
      logo: { fields: ["name", "url", "alternativeText"] },
      menuLinks: { populate: true },
      buttons: { populate: true },
    },
  },

  hero: {
    populate: {
      buttons: { populate: true },

      bgImage: {
        fields: ["name", "url", "alternativeText"],
      },
    },
  },

  about: {
    populate: {
      image: { fields: ["name", "url", "alternativeText"] },
      contents: { populate: true },
    },
  },
  features: {
    populate: {
      bgImage: { fields: ["name", "url", "alternativeText"] },
      image: { fields: ["name", "url", "alternativeText"] },
      feature: { populate: true },
    },
  },

  additionalFeatures: {
    populate: {
      image: { fields: ["name", "url", "alternativeText"] },
      moreFeatures: { populate: true },
    },
  },

  footer: {
    populate: {
      logo: { fields: ["name", "url", "alternativeText"] },
      footerColumns: {
        populate: {
          menuName: { populate: true },
        },
      },
    },
  },
};
module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In homepage-middleware-populate middleware.");

    ctx.query = { populate, ...ctx.query };

    await next();
  };
};
