'use strict';

const afiliadosListRoute = require('./afiliados-list.route');

function register(server) {
	server.route(afiliadosListRoute);
}

const plugin = {
	name: 'afiliados',
	version: '1.0.0',
	register,
};

exports.plugin = plugin;
