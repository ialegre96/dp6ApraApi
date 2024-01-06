'use strict';

const raven = require('hapi-raven');
const statusPlugin = require('hapijs-status-monitor');
const { isDevOrProd } = require('../shared/helper');
const pagiJapi = require('./shared/paginate');
const hapiAxios = require('./shared/axios');
const afiliadosPlugin = require('./Afiliados/afiliados.plugin');
const quienessomosPlugin = require('./quienes_somos/quienes_somos.plugin');

const plugins = [afiliadosPlugin, quienessomosPlugin];

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
