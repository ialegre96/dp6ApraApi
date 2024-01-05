'use strict';

const handler = require('./quienes_somos-list.handler');

const route = {
	handler,
	method: 'GET',
	path: 'quienessomos',
};

module.exports = route;
