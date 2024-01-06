'use strict';

const handler = require('./afiliados-list.handler');

const route = {
	handler,
	method: 'GET',
	path: '/afiliados',
};

module.exports = route;
