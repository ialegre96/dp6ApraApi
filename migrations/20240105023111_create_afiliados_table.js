const helper = require('./../src/shared/helperMigration');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable('afiliados', (table) => {
		table.increments();
		table.string('nombres').nullable();
		table.string('apellido_paterno').nullable();
		table.string('apellido_materno').nullable();
		table.string('dni').nullable();
		table.date('fecha_emision').nullable();
		table.string('foto_frontal').nullable();
		table.string('telefono').nullable();
		table.string('correo').nullable();
		table.string('firma_digital').nullable();
		helper.defaultColumns(table, false);
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTableIfExists('afiliados');
};
