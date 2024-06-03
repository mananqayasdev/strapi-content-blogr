"use strict";

/**
 * `navigation-populate` middleware
 */

const populate = "*";

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In navigation-populate middleware.");
    ctx.query = { populate, ...ctx.query };

    await next();
  };
};
