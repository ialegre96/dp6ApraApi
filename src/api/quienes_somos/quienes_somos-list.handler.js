'use strict';

const quienessomos = require('../models/Quienes_somos');

async function handler(request, h) {
	const list = await quienessomos.listInfoquienessomos();
	return list;
}

module.exports = handler;
