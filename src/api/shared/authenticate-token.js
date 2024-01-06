'use strict';

/* istanbul ignore next */
const { isNullOrUndefined } = require('util');
// const Employee = require('./../models/ComEmployee');
// const Customer = require('./../models/Customer');
// const { customerReseller } = require('./../models/enums/code-type-rol-enum');
const Token = require('../validate-token');
const Redis = require('../redis/redis-connection');

async function authenticate(request, token) {
	try {
		let isValid = false;
		const artifacts = {};
		if (token) {
			// const info = await Token.parserToken(request, token);
			// const currentKey = `${process.env.REDIS_DB}${info}`;
			const data = {
				id: 6502,
				name: null,
				email: 'admin2@theend.com',
				code_user: 'faasda',
				status: 1,
				type_user: 2,
				provider: 1,
				activation: 1,
				company_id: 797,
				role: {
					id: 3728,
					name: 'Administrador',
					code: 'ADMIN0001',
					type_role_id: 2,
					sales_products_filters: null,
					typeRole: {
						id: 2,
						code: 'ADMIN',
						name: 'Administrador general',
						description: 'Configuracion global para admin',
						settings: {
							data: {
								configFields: {
									cashBox: true,
									terminals: true,
									warehouse: true,
								},
								creationAllowed: [
									'ADMIN',
									'ACCOUNTANT',
									'MAKI_VENDOR',
									'RESELLER',
									'STORE_KEEPER',
									'SUPPORT',
									'DELIVERY',
									'TECHNICAL',
								],
							},
							validations: {
								allowSales: true,
								simultaneity: true,
								allowChangeRoles: true,
								skipDeviceValidation: false,
							},
						},
					},
				},
				company: {
					id: 797,
					nombre_comercial: 'THE END',
					razon_social: 'THE END',
					ruc: '20147852360',
					hash: '$2y$10$NnvqVVttkcXuP4maVB1inuqsnT8MXPUUjdmCxr/e8mPlRQq6FE7sC',
					code_company: 'THEEND01',
					company_parent_id: 0,
					company: null,
				},
				project: {
					id: 2,
					name: 'MAKI Project',
					description: 'Quipusale, QuipuAdmin',
					code_project: 'maki_project',
				},
				app: {
					id: 2,
					name: 'Quipu Admin',
					code_app: 'quipuadmin',
				},
				uid: null,
				app_id: 2,
				token:
					'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI5MzU4LCJpc3MiOiJodHRwczovL2FjbC5hcHBydW5uLm5ldC9hcGkvYXV0aGVudGljYXRlIiwiaWF0IjoxNjU0NzA5NTgwLCJleHAiOjE2NTk4OTM1ODAsIm5iZiI6MTY1NDcwOTU4MCwianRpIjoiOTNxakRtRU5iS1FnWjVQMyJ9.naivktq8KJdBgnCYR_sU7S54PH4njOtYXiPTdFjY2Ko',
				statusHttp: '200',
				info_device: {
					name: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.61 Safari/537.36',
					clienteIp: '190.237.157.11:58964',
				},
				session_id: 'OXjmeyj6l3Q0JyuvlY6IzxbT2me8jMEg2gH5PcpH',
				code_device: null,
				flag_movil: false,
				flagSync: false,
				codePermission: 'permission-3728-29358',
				com_subsidiaries_id: 1767,
				sal_terminals_id: 3143,
				war_warehouses_id: 3492,
				aclUserCode: 'faasda',
				aclUserId: 6502,
				employee: {
					id: 6502,
					aclUserId: null,
					comSubsidiariesId: 1767,
					warWarehousesId: 3492,
					salTerminalsId: 3143,
					name: 'Respaldo',
					lastname: '*',
					email: 'admin2@theend.com',
					urlImage: '//s3.amazonaws.com/japi-admin/place-holder.svg',
					codeTypeRol: 'ADMIN',
					flagAdmin: 1,
					aclUserCode: 'faasda',
					code: 'faasda',
					roleId: 3728,
					specialty: null,
					level: null,
					phone: null,
					tokenDevice:
						'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjE6NjI2OTY2NzcyNTA0OmFuZHJvaWQ6NjQ2OGQ1OGVmOTQ2NmJkYmRlYmM2ZCIsImV4cCI6MTY1NDE5NjY3MiwiZmlkIjoiZHNrRERMaHdSRldRSHd1TE1vV28ySiIsInByb2plY3ROdW1iZXIiOjYyNjk2Njc3MjUwNH0.AB2LPV8wRQIhAL0lRn590JRZkCv8h7T4t',
					configFilters: {
						sales: {
							warehouses: {
								values: [],
								fieldName: 'warehouse_id',
								tableName: 'sal_documents',
							},
							subsidiaries: {
								values: [],
								fieldName: 'com_subsidiary_id',
								tableName: 'sal_documents',
							},
						},
						actions: {
							sales: {
								name: '',
								value: false,
							},
							orders: {
								name: '',
								value: false,
							},
							request: {
								name: '',
								value: false,
							},
							quotation: {
								name: '',
								value: false,
							},
						},
						products: {
							warehouses: {
								values: [],
								fieldName: 'warehouse_id',
							},
						},
						commerces: {
							commerces: {
								values: [],
								fieldName: 'id',
							},
							subsidiaries: {
								values: [],
								fieldName: 'subsidiary_id',
							},
						},
						transfers: {
							warehouses: {
								values: [],
								fieldName: 'id',
								tableName: 'war_warehouses',
							},
						},
						warehouses: {
							warehouses: {
								values: [],
								fieldName: 'id',
							},
							subsidiaries: {
								values: [],
								fieldName: 'subsidiary_id',
							},
						},
						subsidiaries: {
							subsidiaries: {
								values: [],
								fieldName: 'id',
							},
						},
						cash: {
							values: [],
							fieldName: 'id',
						},
					},
					flagActive: 1,
					personId: 826,
					flagTypePerson: 1,
					documentNumber: '00000000',
					companyId: 373,
					cashId: 1183,
					flagDisplayStock: 0,
					additionalInformation: {
						percentageWin: 0,
					},
					company: {
						address: null,
						code: 'THEEND01',
						comItemId: 4,
						companyName: 'THE END',
						companyRzSocial: 'THE END',
						convertWeightTo: 'lb',
						id: 373,
						flagBarcodeReader: 1,
						flagIgv: 1,
						flagUpdatePrice: 1,
						logo: 'https://japi-static.s3.amazonaws.com/japi-sales-error/NO-LOGO-IMAGE3-%283%29.png',
						settings: {
							mpos: false,
							bucket: 'THEEND01_image',
							flagTip: true,
							showCash: false,
							flagCodes: true,
							flagImport: false,
							flagConvers: true,
							flagGrouper: true,
							flagShowIot: true,
							autoDispatch: true,
							distanceMode: 2,
							downloadSale: true,
							COTMoveKardex: true,
							domainCatalog: '',
							flagQuotation: true,
							flagUseUbigeo: false,
							priceDelivery: [],
							stockNegative: false,
							assignEmployee: true,
							flagKardexFast: true,
							flagTypeSearch: false,
							globalDiscount: true,
							restaurantFlow: true,
							showNotifySale: false,
							singleDiscount: true,
							typePriceShown: 1,
							bucketSaleError: 'THEEND01',
							showImageSearch: false,
							flagDeleteTrnBnk: true,
							flagKardexValued: false,
							flagShowBaseUnit: true,
							flagSyncExternal: false,
							flagTypeDiscount: false,
							numberOfDecimals: 2,
							flagCatEcomFather: false,
							flagCategoryPrice: false,
							flagChangeNtvFlow: false,
							flagNotGenericNtc: false,
							flagPaymentVendor: true,
							flagShowPhoneDrive: true,
							flagShowVariations: true,
							typeRegisterKardex: 1,
							flagCodeProductAuto: true,
							flagEditOrderVendor: true,
							flagShowSlugProduct: true,
							flagTransferDefault: false,
							flagTransferDisplay: true,
							flagTransportAgency: true,
							flagTypeOriginOrder: true,
							flagWorkWithBatches: true,
							flagWorkWithDealers: true,
							freeCourierSettings: {
								radioOrderMax: 2,
								flagNotifyRandom: false,
								numberNotifyFree: 0,
								notifyByRadioOrder: false,
								freeOrderPercentage: 23,
								numberNotifyCourier: 0,
								numberNotifyDelivery: 0,
								showFlagCollectForYou: false,
								courierOrderPercentage: 30,
								deliveryOrderPercentage: 10.5,
								flagNotifyRandomCourier: false,
								limitAssignedOrdersFree: 0,
								additionalCostPercentage: 0,
								flagNotifyRandomDelivery: false,
								showFlagImmediateDelivery: false,
								limitAssignedOrdersCourier: 0,
								limitAssignedOrdersDelivery: 0,
							},
							digitCorrelativeSale: 8,
							flagBasePriceDefault: 2,
							flagShowPhoneCommerce: true,
							emailCustomerMandatory: true,
							flagAddressNotRequired: false,
							flagUseTransportAgency: true,
							flagEmployeeTransaction: false,
							flagAskLocationSellerApp: true,
							flagCurrierDeliveryReady: false,
							flagGenericSalesCustomer: true,
							flagNotConvertToSaleFlow: true,
							flagShowAccountingEngine: false,
							flagTypeIntegrationGrouper: false,
							flagRequestLocationOrderApp: true,
							flagUpdatePriceAllWarehouse: false,
							flagWholesaleVariationGroup: false,
							flagStockDiscountSaleTransfer: false,
							typeProductsCreationPermission: [1, 2, 6],
							flagMultipleSalesConversionsQuote: false,
						},
						theme: {
							info: '#2DB6F5',
							pink: '#fe6b7d',
							error: '#FF5253',
							accent: '#005CAF',
							primary: '#05579b',
							success: '#4DC68C',
							warning: '#FFB74C',
							secondary: '#18324e',
						},
						urlImage: [],
						weight: 'kb',
						credential: null,
						ruc: '20147852360',
						email: 'theend@soporte.com',
						phone: null,
						currency: 'PEN',
						aclId: null,
						commerceCode: null,
						aclCode: 'THEEND01',
						comCountryId: 1,
						companyId: null,
						banners: [],
						socialMedia: null,
						templateCode: null,
						colorCode: null,
						flagTest: 0,
						configIntegration: {
							process: [
								{
									id: 12,
									code: 'INS_COMMERCE',
									name: 'Crear comercio',
									scope: 'Comercio',
									module: 'PEDIDO_ECOMMERCE',
									urlImage: [
										'https://s3.amazonaws.com/apprunn-acl/icons/&XktCGfzk6IaCZy1qB0kuHGXcpy9VI.svg',
									],
									categories: {
										TIE: {
											ACCOUNTING: {
												code: 'ACCOUNTING',
												flagActive: false,
												integrationCode: 'TIE',
											},
											APPLICATION_PERSISTENCE: {
												code: 'APPLICATION_PERSISTENCE',
												flagActive: true,
												integrationCode: 'TIE',
											},
										},
										TIP: {
											PAYMENT_LINK: {
												code: 'PAYMENT_LINK',
												flagActive: true,
												integrationCode: 'TIP',
											},
											PAYMENT_BUTTON: {
												code: 'PAYMENT_BUTTON',
												flagActive: true,
												integrationCode: 'TIP',
											},
										},
									},
									description: 'Crear comercio',
									typeNotNames: {
										TIE: ['Persistencia de aplicación (SYNC)', 'Contabilidad'],
										TIP: ['Link de pago', 'Boton de pago'],
									},
								},
								{
									id: 11,
									code: 'UPD_PROMOTION',
									name: 'Actualizar promoción\t',
									scope: 'General',
									module: 'VENTA',
									urlImage: [
										'https://s3.amazonaws.com/apprunn-acl/icons/zrntZ&zq3ksCDzsmgTwoVG6c22X26d.svg',
									],
									categories: {
										TIN: {
											MESSENGER: {
												code: 'MESSENGER',
												flagActive: true,
												integrationCode: 'TIN',
											},
										},
										TIP: {
											PAYMENT_LINK: {
												code: 'PAYMENT_LINK',
												flagActive: false,
												integrationCode: 'TIP',
											},
										},
									},
									description: 'Actualizar promoción\t',
									typeNotNames: {
										TIN: ['Mensajeria'],
										TIP: ['Link de pago'],
									},
								},
							],
							integrations: [
								{
									id: 13,
									code: 'leadgods',
									name: 'Market Pagos',
									order: 3,
									flagEdit: 0,
									urlImage: [
										'https://quipu-acl.s3.amazonaws.com/icons/logo-casamarket.png',
									],
									categoryId: 5,
									buildFields: {
										url: {
											type: 'string',
											order: 2,
											value: 'http://190.152.245.250',
											required: true,
											labelName: 'Dominio de proveedor de servicio',
										},
										port: {
											type: 'string',
											order: 1,
											required: true,
											labelName: 'Puerto de conexion al servicio.',
										},
										token: {
											type: 'string',
											order: 3,
											required: true,
											labelName: 'Credenciales (Token) de conxion al servicio.',
										},
										webhook: {
											type: 'string',
											order: 1,
											required: true,
											labelName: 'Ruta de resolución (webhook)',
										},
									},
									description: 'Integración con LeadGods',
									flagPayment: 1,
									categoryCode: 'PAYMENT_LINK',
									countryCodes: 'PER',
									flagInternal: 0,
									additionalInformation: {},
								},
								{
									id: 15,
									code: 'niubiz',
									name: 'Niubiz',
									order: 1,
									flagEdit: 1,
									urlImage: [
										'https://quipu-acl.s3.amazonaws.com/icons/logo-niubiz.png',
									],
									categoryId: 6,
									buildFields: {
										url: {
											type: 'string',
											order: 2,
											value: 'http://190.152.245.250',
											required: true,
											labelName: 'Dominio de proveedor de servicio',
										},
										port: {
											type: 'string',
											order: 1,
											required: true,
											labelName: 'Puerto de conexion al servicio.',
										},
										token: {
											type: 'string',
											order: 3,
											required: true,
											labelName: 'Credenciales (Token) de conxion al servicio.',
										},
										webhook: {
											type: 'string',
											order: 1,
											required: true,
											labelName: 'Ruta de resolución (webhook)',
										},
									},
									description: 'Integración con Niubiz',
									flagPayment: 1,
									categoryCode: 'PAYMENT_BUTTON',
									countryCodes: 'PER',
									flagInternal: 1,
									additionalInformation: {},
								},
								{
									id: 27,
									code: 'firebase_sync',
									name: 'Sincronización firebase',
									order: 1,
									flagEdit: 1,
									urlImage: [
										'https://quipu-acl.s3.amazonaws.com/icons/logo-firefase.png',
									],
									categoryId: 9,
									buildFields: {
										privateKey: {
											type: 'string',
											order: 2,
											required: true,
											labelName: 'Clave privada',
										},
										databaseURL: {
											type: 'string',
											order: 1,
											required: true,
											labelName: 'URL de la base de datos',
										},
									},
									description: 'Integración sincronización firebase',
									flagPayment: 1,
									categoryCode: 'APPLICATION_PERSISTENCE',
									countryCodes: 'PER',
									flagInternal: 1,
									additionalInformation: {},
								},
								{
									id: 28,
									code: 'quipu',
									name: 'QUIPU',
									order: 1,
									flagEdit: 1,
									urlImage: [
										'https://quipu-acl.s3.amazonaws.com/icons/logo-quipu.png',
									],
									categoryId: 10,
									buildFields: {
										flagAccountant: {
											0: {
												name: {
													type: 'string',
													order: 1,
													required: true,
													labelName: 'Nombre de contador',
												},
												user: {
													type: 'string',
													order: 4,
													required: true,
													labelName: 'Usuario',
												},
												lastname: {
													type: 'string',
													order: 2,
													required: true,
													labelName: 'Apellido de contador',
												},
												password: {
													type: 'password',
													order: 5,
													required: true,
													labelName: 'Contraseña',
												},
												documentNumber: {
													type: 'string',
													order: 3,
													required: true,
													labelName: 'Número de documento',
												},
											},
											1: {
												codeAccountant: {
													type: 'string',
													order: 1,
													required: true,
													labelName: 'Código de contador',
												},
											},
											type: 'boolean',
											order: 3,
											required: true,
											labelName: 'Tiene contador?',
										},
									},
									description: 'Integración sincronización QUIPU',
									flagPayment: 1,
									categoryCode: 'ACCOUNTING',
									countryCodes: 'PER',
									flagInternal: 1,
									additionalInformation: {},
								},
								{
									id: 10,
									code: 'WMAKI',
									name: 'Maki Chat (Nuevo)',
									order: 2,
									flagEdit: 1,
									urlImage: [
										'https://quipu-acl.s3.amazonaws.com/icons/logo-maki-chat.png',
									],
									categoryId: 2,
									buildFields: {
										url: {
											type: 'string',
											order: 2,
											value: 'http://190.152.245.250',
											required: true,
											labelName: 'Dominio de proveedor de servicio',
										},
										port: {
											type: 'string',
											order: 1,
											required: true,
											labelName: 'Puerto de conexion al servicio.',
										},
										token: {
											type: 'string',
											order: 3,
											required: true,
											labelName: 'Credenciales (Token) de conxion al servicio.',
										},
										webhook: {
											type: 'string',
											order: 1,
											required: true,
											labelName: 'Ruta de resolución (webhook)',
										},
									},
									description: null,
									flagPayment: 1,
									categoryCode: 'MESSENGER',
									countryCodes: 'PER',
									flagInternal: 1,
									additionalInformation: {},
								},
								{
									id: 30,
									code: 'mercadopago',
									name: 'Mercado Pago',
									order: 9,
									flagEdit: 0,
									urlImage: [
										'https://quipu-acl.s3.amazonaws.com/icons/mercado-pago.png',
									],
									categoryId: 6,
									buildFields: {
										email: {
											type: 'string',
											order: 2,
											required: true,
											labelName: 'Cuenta a relacionar (Email)',
										},
										publicKey: {
											type: 'string',
											order: 3,
											required: true,
											labelName: 'Public Key',
										},
										accesToken: {
											type: 'string',
											order: 1,
											required: true,
											labelName: 'Acces Token',
										},
										payboxProduction: {
											type: 'select',
											order: 3,
											options: [
												{
													code: 'dev',
													name: 'Desarrollo',
												},
												{
													code: 'production',
													name: 'Producción',
												},
											],
											required: true,
											labelName: 'Tipo de Ejecución*',
										},
									},
									description: 'Integración con Mercado Pago',
									flagPayment: 1,
									categoryCode: 'PAYMENT_BUTTON',
									countryCodes: 'PER',
									flagInternal: 0,
									additionalInformation: {},
								},
								{
									id: 19,
									code: 'niubiz_sdk',
									name: 'Niubiz Movil',
									order: 1,
									flagEdit: 1,
									urlImage: [
										'https://quipu-acl.s3.amazonaws.com/icons/logo-niubiz.png',
									],
									categoryId: 7,
									buildFields: {
										niubiz_sdk: {
											accessKey: {
												type: 'string',
												order: 2,
												required: true,
												labelName: 'Clave de acceso',
											},
											accessUser: {
												type: 'string',
												order: 3,
												required: true,
												labelName: 'Usuario de acceso',
											},
											merchantId: {
												type: 'string',
												order: 1,
												required: true,
												labelName: 'Comercio ID',
											},
											payboxProduction: {
												type: 'select',
												order: 5,
												options: [
													{
														code: 'dev',
														name: 'Desarrollo',
													},
													{
														code: 'production',
														name: 'Producción',
													},
												],
												required: true,
												labelName: 'Tipo de Ejecución*',
											},
										},
									},
									description: 'Integración con Niubiz',
									flagPayment: 1,
									categoryCode: 'SDK',
									countryCodes: 'PER',
									flagInternal: 1,
									additionalInformation: {},
								},
							],
						},
						flagMaster: null,
						plans: null,
						flagLoyalti: 1,
						additionalInformation: null,
						country: {
							id: 1,
							name: 'Peru',
							countryCode: 'PER',
							taxName: 'IGV',
							urlImage:
								'https://quipu-admin.s3.amazonaws.com/flags/flag-peru.jpg',
							taxSize: null,
							configSupplier: null,
							configTaxes: {
								FACT: {
									RA: [
										{
											code: 'BOL',
											term: 72,
											format: 'hours',
											dateValid: {
												informed: 'date_notification',
												notInformed: 'created_at',
											},
											flagInformed: false,
										},
										{
											code: 'FAC',
											term: 72,
											format: 'hours',
											dateValid: {
												informed: 'date_notification',
											},
											flagInformed: true,
										},
										{
											code: 'NTC',
											term: 72,
											format: 'hours',
											dateValid: {
												informed: 'date_notification',
												notInformed: 'created_at',
											},
											flagInformed: false,
										},
									],
								},
								ICBPER: [
									{
										year: '2019',
										amount: 0.1,
										default: false,
									},
									{
										year: '2020',
										amount: 0.2,
										default: false,
									},
									{
										year: '2021',
										amount: 0.3,
										default: false,
									},
									{
										year: '2022',
										amount: 0.4,
										default: false,
									},
									{
										year: '2023',
										amount: 0.5,
										default: true,
									},
								],
								digitCorrelativeSale: 8,
							},
							productsTaxes: {
								default: {
									code: '01',
									name: 'IGV IMPUESTO GENERAL A LAS VENTAS',
									codeTable: 'TABLA16',
									percentage: 18,
									codePercentage: '01',
								},
							},
							descriptionTax: 'SUNAT',
							percentage: 0,
							currency: 'PEN',
						},
						currencyDefault: {
							id: 'PEN',
							name: 'SOLES',
							code: 'PEN',
							symbol: 'S/',
						},
						item: {
							id: 4,
							name: 'Textil',
							code: null,
							dataState: {
								BOL: {
									transitions: [
										{
											to: 'finished',
											from: 'pending',
											name: 'create',
										},
										{
											to: 'canceled',
											from: 'finished',
											name: 'cancel',
										},
									],
								},
								COT: {
									transitions: [
										{
											to: 'finished',
											from: 'pending',
											name: 'create',
										},
									],
								},
								FAC: {
									transitions: [
										{
											to: 'finished',
											from: 'pending',
											name: 'create',
										},
										{
											to: 'canceled',
											from: 'finished',
											name: 'cancel',
										},
									],
								},
								NTV: {
									transitions: [
										{
											to: 'finished',
											from: 'pending',
											name: 'create',
										},
										{
											to: 'canceled',
											from: 'finished',
											name: 'cancel',
										},
									],
								},
							},
							additionalInformation: null,
							type: 1,
							urlImage: null,
							urlIcon: null,
							companyId: null,
							totalCommerce: 0,
						},
						currencies: [
							{
								currencyId: 'PEN',
								flagDefault: null,
							},
							{
								currencyId: 'USD',
								flagDefault: null,
							},
						],
						salPriceListDefault: {
							id: 1483,
							warWarehousesId: null,
							comEmployeeId: null,
							comCustomersId: null,
							name: 'Lista de precios por defecto',
							description: 'Lista de precios por defecto',
							flagDefault: 1,
							flagActive: 1,
						},
						commerceSubsidiaries: [
							{
								warehousesRelated: [4093],
								subsidiaryId: 2254,
								subsidiaryAclCode: 'THEEND01_20147852360',
								ruc: '201478523602',
								rucName: '201478523602 - undefined',
							},
							{
								warehousesRelated: [4523],
								subsidiaryId: 2521,
								subsidiaryAclCode: null,
								ruc: '45678912345',
								rucName: '45678912345 - undefined',
							},
						],
					},
					subsidiary: {
						id: 1767,
						sucursalName: 'SUCURSAL THE END',
						location: {
							x: -12.0460631,
							y: -77.0401732,
						},
						ubigeo: '1093',
						sucursalCode: '001',
						phone: '555-555-555',
						address: ' Direccion de la empresa, es de la empresa',
						departmentId: null,
						provinceId: null,
						districtId: null,
						contactName: 'Persona de contacto',
						contactLastname: 'apellido',
						email: ' correo@gmail.com',
						urlImage: '/sucursal.png',
						websiteDescription: '[]',
						ruc: '20147852360',
						rzSocial: 'THE END',
						flagTaxes: 0,
						typeAmbientTax: 1,
						flagCreditDispatch: 1,
						debtsSales: {
							PEN: 36871.130000000005,
							USD: 5,
						},
						specialContributor: null,
						flagAccount: 0,
						rise: null,
						settings: {
							configLoyalti: {
								equivalentMoney: {
									cost: 0.5,
									point: 1,
								},
								equivalentPoint: {
									suns: 100,
									point: 1,
								},
							},
						},
						flagAccountingEngine: 0,
						flagAccountingAutomatic: 0,
						urlLogo:
							'https://quipu-static.s3.amazonaws.com/THEEND01_image/THEEND01_20147852360/image7.png',
						companyId: 373,
						subsidiaryId: null,
						distributorCustomerId: null,
						flagIntegrations: 0,
						subsidiaryAclCode: 'THEEND01_20147852360',
						configIntegrations: {
							centerCost: {
								data: [],
								flagActive: false,
							},
							accountingPlan: {
								uploadPlan: false,
							},
							accountingConfiguration: {
								data: [
									{
										code: 'sales',
										name: 'Ventas',
										flagActive: true,
										accountingAutomatic: false,
									},
									{
										code: 'purchases',
										name: 'Compras',
										flagActive: true,
										accountingAutomatic: false,
									},
									{
										code: 'CXC',
										name: 'Cuentas por Cobrar',
										flagActive: false,
										accountingAutomatic: false,
									},
								],
							},
						},
						flagCompanyDefault: 0,
						rucName: '20147852360 - SUCURSAL THE END',
					},
					terminal: {
						id: 3143,
						comSubsidiariesId: 1767,
						warWarehousesId: 3492,
						warWarehousesName: 'Tienda Principal',
						salTypeTerminalsId: null,
						typeTerminal: null,
						name: 'administrador',
						description: null,
						code: null,
						sunatCode: null,
						printCode: null,
						ruc: null,
						cashId: 1183,
						authorizationDate: null,
						codeTaxes: null,
						flagActive: 1,
						flagEcommerce: 0,
						typeDevice: null,
						sessionStatusId: 1,
						commerceId: null,
						companyId: '373',
						sessionStatusName: 'Disponible',
					},
					cash: {
						id: 1183,
						code: 'CAJA1',
						name: 'CAJA GENERAL',
						description: 'CAJA GENERAL',
						account: null,
						type: 'POST',
						warWarehousesId: 3492,
						terminalId: 3143,
						flagGeneral: 1,
						balance: {
							PEN: 109838.29000000001,
							USD: -3806.440000000001,
						},
						state: {
							PEN: 1,
							USD: 1,
						},
						flagControl: null,
						accountingAccount: null,
						createdAt: '2021-02-12T20:59:03.000Z',
						flagActive: 1,
						subsidiaryId: 1767,
					},
					dataSellers: null,
					delivery: null,
					salPriceList: {
						id: 1483,
						warWarehousesId: null,
						comEmployeeId: null,
						comCustomersId: null,
						name: 'Lista de precios por defecto',
						description: 'Lista de precios por defecto',
						flagDefault: 1,
						flagActive: 1,
					},
					fullname: 'Respaldo *',
					autocomplete: 'Respaldo * 00000000 faasda admin2@theend.com',
				},
				filters: {
					sales: {
						warehouses: {
							values: [],
							fieldName: 'warehouse_id',
							tableName: 'sal_documents',
						},
						subsidiaries: {
							values: [],
							fieldName: 'com_subsidiary_id',
							tableName: 'sal_documents',
						},
					},
					actions: {
						sales: {
							name: '',
							value: false,
						},
						orders: {
							name: '',
							value: false,
						},
						request: {
							name: '',
							value: false,
						},
						quotation: {
							name: '',
							value: false,
						},
					},
					products: {
						warehouses: {
							values: [],
							fieldName: 'warehouse_id',
						},
					},
					commerces: {
						commerces: {
							values: [],
							fieldName: 'id',
						},
						subsidiaries: {
							values: [],
							fieldName: 'subsidiary_id',
						},
					},
					transfers: {
						warehouses: {
							values: [],
							fieldName: 'id',
							tableName: 'war_warehouses',
						},
					},
					warehouses: {
						warehouses: {
							values: [],
							fieldName: 'id',
						},
						subsidiaries: {
							values: [],
							fieldName: 'subsidiary_id',
						},
					},
					subsidiaries: {
						subsidiaries: {
							values: [],
							fieldName: 'id',
						},
					},
					cash: {
						values: [],
						fieldName: 'id',
					},
				},
				roleConfig: {
					data: {
						configFields: {
							cashBox: true,
							terminals: true,
							warehouse: true,
						},
						creationAllowed: [
							'ADMIN',
							'ACCOUNTANT',
							'MAKI_VENDOR',
							'RESELLER',
							'STORE_KEEPER',
							'SUPPORT',
							'DELIVERY',
							'TECHNICAL',
						],
					},
					validations: {
						allowSales: true,
						simultaneity: true,
						allowChangeRoles: true,
						skipDeviceValidation: false,
					},
				},
				roleCode: 'ADMIN',
				cms_companies_id: 373,
				com_item_id: 4,
				authorization:
					'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI5MzU4LCJpc3MiOiJodHRwczovL2FjbC5hcHBydW5uLm5ldC9hcGkvYXV0aGVudGljYXRlIiwiaWF0IjoxNjU0NzA5NTgwLCJleHAiOjE2NTk4OTM1ODAsIm5iZiI6MTY1NDcwOTU4MCwianRpIjoiOTNxakRtRU5iS1FnWjVQMyJ9.naivktq8KJdBgnCYR_sU7S54PH4njOtYXiPTdFjY2Ko',
			};
			let credentials = {};
			if (data) {
				isValid = true;
				credentials = data;
				const { authorization } = credentials;
				// const company = await Token.getCompanyByAclCode(credentials.company.code_company, Redis);
				if (isNullOrUndefined(authorization)) {
					let dataEmployee = null;
					if (
						credentials.role &&
						credentials.role.typeRole &&
						credentials.role.typeRole.code === customerReseller
					) {
						const companyCode = credentials.company.code_company;
						const customer = await Customer.getByAclCode(
							credentials.code_user,
							companyCode,
						);
						if (customer) {
							dataEmployee = await Employee.getByFlagAdmin(
								customer.comCompaniesId,
							);
							dataEmployee.customer = customer;
							credentials.commerce = customer.commerce;
							dataEmployee.commerce = customer.commerce;
						}
					} else {
						dataEmployee = await Employee.getByAclUserCode(
							credentials.code_user,
						);
					}

					if (!isNullOrUndefined(dataEmployee)) {
						credentials.com_subsidiaries_id = dataEmployee.comSubsidiariesId;
						credentials.sal_terminals_id = dataEmployee.salTerminalsId;
						credentials.war_warehouses_id = dataEmployee.warWarehousesId;
						credentials.id = dataEmployee.id;
						credentials.aclUserCode = credentials.code_user;
						credentials.aclUserId = credentials.id;
						credentials.employee = dataEmployee;
						const configSubsidiary =
							(dataEmployee.configFilters &&
								dataEmployee.configFilters.subsidiaries) ||
							{};
						if (dataEmployee.configFilters) {
							dataEmployee.configFilters.cash = { ...configSubsidiary.cash };
							delete configSubsidiary.cash;
							dataEmployee.configFilters.subsidiaries = configSubsidiary;
						}
						credentials.filters = dataEmployee.configFilters || {};
						credentials.roleConfig =
							credentials.role &&
							credentials.role.typeRole &&
							credentials.role.typeRole.settings;
						credentials.roleCode =
							credentials.role &&
							credentials.role.typeRole &&
							credentials.role.typeRole.code;
						if (dataEmployee.dataSellers) {
							credentials.dataSellers = dataEmployee.dataSellers;
						}
						if (dataEmployee.delivery) {
							credentials.delivery = dataEmployee.delivery;
						}
						// credentials.cms_companies_id = company.id;
					} else {
						isValid = false;
					}
					// Eliminar luego de replicar mejora en todos los repositorios
					/* if (!credentials.delivery && !credentials.dataSellers) {
						credentials.employee.salPriceList = company.salPriceListDefault;
					} */
					// credentials.com_item_id = company.comItemId;
					// credentials.employee.company = company;
					//
					credentials.authorization = `Bearer ${info}`;
					// await Redis.setDataKey(currentKey, JSON.stringify(credentials));
					const { codePermission: code } = credentials;
					// credentials.servicesPath = code ? await Redis.getDataKey(code) : undefined;
				}
				/* if (!credentials.delivery && !credentials.dataSellers) {
					credentials.employee.salPriceList = company.salPriceListDefault;
				}
				credentials.com_item_id = company.comItemId;
				credentials.cms_companies_id = company.id;
				credentials.employee.company = company;
				if (credentials.employee && credentials.employee.customer) {
					credentials.employee.customer.company = company;
				} */
			}
			console.log(isValid);
			return { isValid, credentials, artifacts };
		}
	} catch (error) {
		/* eslint-disable no-console */
		console.log(`Error to validate token ${error}`);
	}
	return { isValid: false, credentials: {} };
}

module.exports = authenticate;
