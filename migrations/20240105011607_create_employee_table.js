/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable('employee', (table) => {
		table.increments();
		table.string('nombre').nullable();
		table.string('apellido_paterno').nullable();
		table.string('apellido_materno').nullable();
		table.string('direccion').nullable();
		table.string('correo').nullable();
		table.string('telefono').nullable();
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTableIfExists('employee');
};
