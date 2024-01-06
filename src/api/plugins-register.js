'use strict';

const raven = require('hapi-raven');
const statusPlugin = require('hapijs-status-monitor');
<<<<<<< HEAD
const { isDevOrProd } = require('../shared/helper');
const pagiJapi = require('./shared/paginate');
const hapiAxios = require('./shared/axios');
const afiliadosPlugin = require('./Afiliados/afiliados.plugin');

const plugins = [afiliadosPlugin];

if (isDevOrProd()) {
	plugins.push({
		plugin: raven,
		options: { environment: process.env.NODE_ENV },
	});

	plugins.push({
		plugin: statusPlugin,
		options: {
			path: '/',
			title: 'Apra Api',
			routeConfig: {
				auth: false,
			},
		},
	});
}

module.exports = plugins;
=======
>>>>>>> a7ed40866ffe458d006226797bb4f2704881a2dc
