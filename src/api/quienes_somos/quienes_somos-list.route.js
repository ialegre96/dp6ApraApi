'use strict';

const handler = require('./quienes_somos-list.handler');

const route = {
	handler,
	options: {
		auth: false,
	},
	method: 'GET',
	path: '/quienessomos',
};

module.exports = route;
