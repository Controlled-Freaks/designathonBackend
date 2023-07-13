'use strict';

/**
 * employee-reward service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::employee-reward.employee-reward');
