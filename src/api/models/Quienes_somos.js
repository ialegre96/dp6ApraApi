'use strict';

const { Model } = require('objection');
const baseModel = require('./base');
const helper = require('./helper');

class Quienessomos {
	static get tableName() {
		return 'quienessomos';
	}

	static get relationMappings() {}

	static get jsonSchema() {
		const defaultProperties = helper.defaultFields();
		const schema = {
			type: 'object',
			requiered: ['telefono', 'email'],
			properties: {
				introduccionpap: { type: ['string', 'null'] },
				estructurapap: { type: ['string', 'null'] },
				representantespap: { type: ['string', 'null'] },
				imgpap: { type: ['string', 'null'] },
				reseñahispap: { type: ['string', 'null'] },
				telefono: { type: ['string', 'null'] },
				email: { type: ['string', 'null'] },
				localespap: { type: ['string', 'null'] },
				defaultProperties,
			},
		};
		return schema;
	}

	static defaultColumns() {
		return [
			'introduccionpap',
			'estructurapap',
			'representantespap',
			'imgpap',
			'reseñahispap',
			'telefono',
			'email',
			'localespap',
		];
	}

	static listInfo() {
		return this.query().select([
			'introduccionpap',
			'estructurapap',
			'representantespap',
			'imgpap',
			'reseñahispap',
			'telefono',
			'email',
			'localespap',
		]);
	}
}

module.exports = Quienessomos;
