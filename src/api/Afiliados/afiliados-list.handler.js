'use strict';

const Afiliados = require('./../models/Afiliados');

async function handler(request, h) {
	const list = await Afiliados.listAfiliados();
	return list;
}

module.exports = handler;
