'use strict';

const { Model } = require('objection');
const baseModel = require('./base');
const helper = require('./helper');

class Afiliados {
	static get tableName() {
		return 'afiliados';
	}

	static get relationMappings() {} //se Escriben la realciones de el modelo con el resto

	static get jsonSchema() {
		const defaultProperties = helper.defaultFields();
		const schema = {
			type: 'object',
			required: ['nombre', 'correo'],
			properties: {
				nombre: { type: ['string'] },
				apellidoPaterno: { type: ['string', 'null'] },
				apellidoMaterno: { type: ['string', 'null'] },
				dni: { type: ['string', 'null'] },
				fechaEmision: { type: ['date', 'null'] },
				fotoFrontal: { type: ['string', 'null'] },
				telefono: { type: ['string', 'null'] },
				correo: { type: ['string'] },
				firmaDigital: { type: ['string'] },
				...defaultProperties,
			},
		};

		return schema;
	}

	static defaultColumns() {
		return [
			'id',
			'nombres',
			'apellido_paterno',
			'apellido_materno',
			'dni',
			'fecha_emision',
			'foto_frontal',
			'telefono',
			'correo',
			'firma_digital',
		];
	}

	static get virtualAttributes() {
		return ['fullname'];
	}

	static get fullname() {
		const fullname = `${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}`;
		return fullname;
	}

	static listAfiliados() {
		return this.query();
	}
}

module.exports = Afiliados;
