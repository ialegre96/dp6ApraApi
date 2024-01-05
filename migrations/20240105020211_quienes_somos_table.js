'use strict';

const { defaultColumns } = require('../helperMigration');

exports.up = function (knex, Promise) {
	return knex.schema.createTable('quienessomos', (table) => {
		table.increments(); // id
		table.string('introduccion-pap').nullable();
		table.string('estructura-pap').nullable();
		table.string('representantes-pap').nullable();
		table.string('img-pap').nullable();
		table.string('reseña-his-pap').nullable();
		table.string('telefono').nullable();
		table.string('email').nullable();
		table.string('locales-pap').nullable();
		defaultColumns(table, false);
	});
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTableIfExists('quienessomos');
};
