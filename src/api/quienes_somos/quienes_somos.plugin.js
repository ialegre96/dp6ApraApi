'use strict';

const quienesSomosListRoute = require('./quienes_somos-list.route');

function register(server) {
	server.route(quienesSomosListRoute);
}

const plugin = {
	name: 'quienessomos',
	version: '1.0.0',
	register,
};

exports.plugin = plugin;
