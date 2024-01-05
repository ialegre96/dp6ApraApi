'use strict';

const raven = require('hapi-raven');
const statusPlugin = require('hapijs-status-monitor');
const { isDevOrProd } = require('../shared/helper');
const pagiJapi = require('./shared/paginate');
const typePaymentPlugin = require('./sales/type-payments/type-payments.plugin');
const seriesPlugin = require('./sales/series/series-plugin');
const countryPlugin = require('./sales/countries/countries.plugin');
const subsidiariesPlugin = require('./sales/subsidiaries/subsidiaries-plugin');
const terminalsPlugin = require('./sales/terminals/terminals.plugin');
const typeTerminalsPlugin = require('./sales/type-terminals/type-terminals.plugin');
const itemPlugin = require('./sales/items/items.plugin');
const itemCompanyPlugin = require('./configuration-general/items-company/items-company.plugin');
const customerPlugin = require('./sales/customers/customer.plugin');
const typeExpensePlugin = require('./purchases/type-expenses/type-expenses.plugin');
const taxePlugin = require('./purchases/taxes/taxes.plugin');
const statesPurPlugin = require('./purchases/states/states.plugin');
const expensePurPlugin = require('./purchases/expenses/expenses.plugin');
const saleDocumentPlugin = require('./sales/sale-documents/sale-document.plugin');
const employeePlugin = require('./sales/employee/employee-plugin');
const taxeSalPlugin = require('./sales/sal-taxes/taxes.plugin');
const supplierPlugin = require('./purchases/suppliers/suppliers.plugin');
const tablePlugin = require('./sales/tables/tables.plugin');
const comissionsPlugin = require('./sales/comissions/comissions-plugin');
const salPriceListsPlugin = require('./sales/sal-price-lists/sal-price-lists.plugin');
const typeDocumentPlugin = require('./sales/type-documents/type-documents.plugin');
const caDocumentPlugin = require('./checkint-nocount/ca-documents/ca-documents.plugin');
const companiesPlugin = require('./companies/companies.plugin');
const cashDeskClosingPlugin = require('./sales/cash-desk-closing/cash-desk-closing-plugin');
const exchangeRatesPlugin = require('./sales/exchange-rates/exchange-rates.plugin');
const remissionGuidesPlugin = require('./sales/remission-guides/remission-guides.plugin');
const statesPlugin = require('./sales/states/states.plugin');
const reportPlugin = require('./reports/report.plugin');
const notificationsPlugin = require('./integration-api-external/notifications/notifications-plugin');
const paymentsMethodsPlugin = require('./sales/payment-methods/payments-methods.plugin');
const transactionsPlugin = require('./sales/transactions/transactions.plugin');
const bankPlugin = require('./sales/banks/banks-plugin');
const bankAccountPlugin = require('./sales/bank-accounts/bank-account-plugin');
const amortizationsPlugin = require('./checkint-nocount/amortizations/amortizations.plugin');
const amortizationDetailsPlugin = require('./checkint-nocount/amortization-details/amortization-details.plugin');
const templatePlugin = require('./sales/templates/template.plugin');
const currencyPlugin = require('./sales/currency/currency.plugin');
const warehousePlugin = require('./sales/warehouse/warehouse.plugin');
const salOrdersPlugin = require('./sales/sal-orders/sal-orders.plugin');
const salOrderAnnexPlugin = require('./sales/sal-orders-annex/sal-orders-annex.plugin');
const orderStatesPlugin = require('./sales/order-states/order-states.plugin');
const customerAddressPlugin = require('./sales/customers-address/customers-address.plugin');
const importCustomersPlugin = require('./sales/import-customers/import-customers.plugin');
const ballotSummaryPlugin = require('./sales/ballot-summary/ballot-summary.plugin');
const summaryUnsubscribePlugin = require('./sales/summary-unsubscribe/summary-unsubscribe.plugin');
const wayPaymentsPlugin = require('./sales/way-payment/way-payment.plugin');
const typeBillingPlugin = require('./sales/type-billing/type-billing.plugin');
const typeTransactionPlugin = require('./quipu/type-transaction/type-transaction.plugin');
const documentAccountStatusPlugin = require('./statement-of-accounts/document-account-status/document-account-status.plugin');
const collectionTransactionPlugin = require('./checkint-nocount/collection-transactions/collection-transaction.plugin');
const devicesPlugin = require('./configuration-general/devices/device-plugin');
const authenticatePlugin = require('./integration-api-external/authenticate-acl/authenticate-acl-plugin');
const costCenterPlugin = require('./sales/cost-center/cost-center.plugin');
const cashPlugin = require('./cash-banks/cash/cash.plugin');
const paymentStatesPlugin = require('./sales/payment-states/payment-states.plugin');
const bankOperationPlugin = require('./cash-banks/bank-operation/bank-operation.plugin');
const paymentTransactionPlugin = require('./integration-api-external/payment-transactions/payment-transaction-plugin');
const comWayPaymentCommercePlugin = require('./sales/com-way-payment-commerce/com-way-payment-commerce.plugin');
const comEcommerceCompany = require('./sales/com-ecommerce-company/com-ecommerce-company.plugin');
const kardexMovementPlugin = require('./integration-api-external/kardex-movement/kardex-plugin');
const comCommerceInformation = require('./sales/com-commerce-information/com-commerce-information.plugin');
const msDevicePlugin = require('./sales/ms-devices/ms-devices.plugin');
const claimBookPlugin = require('./sales/claim-book/claim-book.plugin');
const itemCommercePlugin = require('./sales/items-commerce/items-commerce.plugin');
const apiLocationPlugin = require('./integration-api-external/api-geolocation/api-geolocation-plugin');
const paymentGatewayPlugin = require('./integration-api-external/payment-gateway/payment-gateway.plugin');
const comFairs = require('./sales/events/com-fairs.plugin');
const deliveryTrackingPlugin = require('./integration-api-external/delivery-tracking/delivery-tracking-plugin');
const gatewayTransactionsPlugin = require('./sales/gateway-transactions/gateway-transactions.plugin');
const transportAgencyPlugin = require('./sales/transport-agency/transport-agency.plugin');
const liquidationsPlugin = require('./sales/liquidations/liquidation-status.plugin');
const customersBenefitsPlugin = require('./sales/customers-benefits/customers-benefits.plugin');

// hash based plugins`
const companiesPublicPlugin = require('./clerkinn/companies/companies.plugin');
const salDocumentPublicPlugin = require('./clerkinn/sales/sale-document.plugin');
const typeDocumentsClerkInnPlugin = require('./clerkinn/type-documents/type-documents.plugin');
const typePaymentsClerkInnPlugin = require('./clerkinn/type-payments/type-payments.plugin');
const caDocumentsClerkInnPlugin = require('./clerkinn/ca-documents/ca-documents.plugin');
const amortizationsClerkInnPlugin = require('./clerkinn/amortizations/amortizations.plugin');
const bankAccountClerkInnPlugin = require('./clerkinn/bank-accounts/bank-account-plugin');
const salPriceListsClerkInnPlugin = require('./clerkinn/sal-price-lists/sal-price-lists.plugin');
const exchangeRatesClerkInnPlugin = require('./clerkinn/exchange-rates/exchange-rates.plugin');
const customersPlugin = require('./clerkinn/customers/customer.plugin');
const subsidiariesClerkinnPlugin = require('./clerkinn/subsidiaries/subsidiaries.plugin');
const catalogSunatClerknnPlugin = require('./clerkinn/electronic-taxes/catalog-sunat/catalog-sunat-clerkinn-plugin');

// QUIPU
const bankAccountTypePlugin = require('./quipu/bank-account-type/bank-account-type-plugin');
const checkSeriesPlugin = require('./quipu/check-series/check-series-plugin');
const checkStatusPlugin = require('./quipu/check-status/check-status-plugin');
const checkPlugin = require('./quipu/check/check-plugin');
const personPlugin = require('./person/person-plugin');
const typeTransactionBank = require('./quipu/type-transaction-bank/type-transaction-bank-plugin');
const typeMovementPlugin = require('./quipu/type-movement/type-movement-plugin');
const typeEntityPlugin = require('./quipu/type-entity/type-entity-plugin');
const transactionBank = require('./quipu/transaction-bank/transaction-bank-plugin');
const groupPlugin = require('./quipu/group/group-plugin');
const typeTransactionSupplierPlugin = require('./quipu/type-transaction-supplier/type-transaction-supplier-plugin');
const supplierTypePlugin = require('./quipu/supplier-type/supplier-type-plugin');
const zonePlugin = require('./quipu/zone/zone-plugin');
const entityStatePlugin = require('./quipu/entity-state/entity-state-plugin');
const bankReconcilementPlugin = require('./quipu/bank-reconcilement/bank-reconcilement.plugin');
const modulePlugin = require('./quipu/module/module-plugin');
const originIncomePlugin = require('./quipu/origin-income/origin-income-plugin');
const parishPlaugin = require('./quipu/parish/parish-plugin');
const cityPlugin = require('./quipu/city/city-plugin');
const provincePlugin = require('./quipu/province/province-plugin');
const courierPlugin = require('./quipu/courier/courier-plugin');
const companyTemplatePlugin = require('./quipu/company-template/company-template-plugin');
const registerSyncPlugin = require('./integration-api-external/apis-external-fb/register-sync-firebase/register-sync-entity-plugin');
const accountingIntegrationPlugin = require('./integration-api-external/apis-external-fb/accounting-integrations/accounting-integration-plugin');
const processPlugin = require('./configuration-general/process/process-plugin');
const integrationsPlugin = require('./configuration-general/integrations/integration-plugin');
const typeProcessPlugin = require('./configuration-general/type-process/type-process-plugin');
const retentionCodePlugin = require('./quipu/retention-codes/retention-code-plugin');
const withholdingCompanyPlugin = require('./quipu/withholdings-company/withholgin-company.plugin');

// Electronic-taxes
const templatetaxesPlugin = require('./electronic-taxes/template-taxes/template-taxes.plugin');
const facturacionSunatPlugin = require('./electronic-taxes/facturacion-sunat/facturacion-sunat-plugin');
const catalogSunatDetailsPlugin = require('./electronic-taxes/catalog-sunat/catalog-sunat-details.plugin');
const taxesSunatPlugin = require('./electronic-taxes/taxes-sunat/taxes-sunat-plugin');
const MsExchangeRatesPlugin = require('./ms-exchange-rate/ms-exchange-rate.plugin');

// PURCHASES
const purchaseDocumentsPlugin = require('./purchases/purchase-documents/purchase-documents.plugin');
const withholdingTaxPlugin = require('./purchases/withholding-tax/withholding-tax.plugin');
const typeTransferKardex = require('./purchases/type-transfer-kardex/type-transfer-kardex.plugin');
const statusOrcPlugin = require('./purchases/status-orc/status-orc.plugin');
const purchaseAnnexCreateRoute = require('./purchases/purchase-annex/purchase-annex.plugin');

// DASHBOARD
const dashboardPlugin = require('./configuration-general/dashboard/dashboard-plugin');

// PAYROLL
const groupTablePlugin = require('./payroll/group/group-table-plugin');
const groupChargesPlugin = require('./payroll/charges/group-charges-plugin');
const typeWorkingRelationship = require('./payroll/type-working-relationship/type-working-plugin');
const recognitionsPlugin = require('./payroll/recognitions/recognitions-plugin');
const reprimandsPlugin = require('./payroll/reprimands/reprimands-plugin');
const familyMembersPlugin = require('./payroll/family-members/family-members-plugin');
const dateControlPlugin = require('./payroll/date-control/date-control-plugin');
const additionalFieldsPlugin = require('./payroll/additional-fields/additional-fields-plugin');
const employeeCompanyCreateRoute = require('./payroll/employees-company/employees-company-plugin');
const conceptsRoute = require('./payroll/concepts/concepts-plugin');
const payrollHeadingRoute = require('./payroll/payroll-heading/payroll-heading-plugin');
const payrollDetailsRoute = require('./payroll/payroll-details/payroll-details-plugin');
const urlShortener = require('./url-short-qr/url-short-qr-plugin');

// RESELLERS
const zonesPlugin = require('./quipu/resellers/zones/zones-plugin');
const sellerPlugin = require('./quipu/resellers/sellers/sellers.plugin');
const routerPlugin = require('./quipu/resellers/routers/routers.plugin');
const googleMapsPlugin = require('./quipu/resellers/google-maps/google-maps.plugin');
const routesCheckInPlugin = require('./quipu/resellers/routes-check-in/routes-check-in.plugin');
const deliveryRouterPlugin = require('./quipu/resellers/delivery-router/delivery-router.plugin');
const orderPickStatePlugin = require('./quipu/resellers/order-pick-state/order-pick-state.plugin');
const routeStatePlugin = require('./quipu/resellers/route-state/route-state.plugin');
const vehiclesPlugin = require('./quipu/resellers/vehicles/vehicles.plugin');
const typeTransportPlugin = require('./quipu/resellers/type-transport/type-transport.plugin');
const deliveryPlugin = require('./quipu/resellers/delivery/delivery.plugin');

const msTypeGeneral = require('./ms-type-general/ms-type-general.plugin');

const hapiAxios = require('./shared/axios');

const plugins = [
	pagiJapi,
	typePaymentPlugin,
	countryPlugin,
	subsidiariesPlugin,
	seriesPlugin,
	itemPlugin,
	itemCompanyPlugin,
	customerPlugin,
	typeTerminalsPlugin,
	terminalsPlugin,
	typeExpensePlugin,
	taxePlugin,
	statesPurPlugin,
	expensePurPlugin,
	saleDocumentPlugin,
	employeePlugin,
	taxeSalPlugin,
	supplierPlugin,
	tablePlugin,
	wayPaymentsPlugin,
	comissionsPlugin,
	salPriceListsPlugin,
	typeDocumentPlugin,
	caDocumentPlugin,
	companiesPlugin,
	cashDeskClosingPlugin,
	exchangeRatesPlugin,
	remissionGuidesPlugin,
	MsExchangeRatesPlugin,
	statesPlugin,
	reportPlugin,
	notificationsPlugin,
	paymentsMethodsPlugin,
	transactionsPlugin,
	bankPlugin,
	bankAccountPlugin,
	amortizationsPlugin,
	amortizationDetailsPlugin,
	companiesPublicPlugin,
	salDocumentPublicPlugin,
	typeDocumentsClerkInnPlugin,
	typePaymentsClerkInnPlugin,
	caDocumentsClerkInnPlugin,
	amortizationsClerkInnPlugin,
	bankAccountClerkInnPlugin,
	templatePlugin,
	bankAccountTypePlugin,
	checkSeriesPlugin,
	checkStatusPlugin,
	checkPlugin,
	salPriceListsClerkInnPlugin,
	personPlugin,
	templatetaxesPlugin,
	facturacionSunatPlugin,
	catalogSunatDetailsPlugin,
	currencyPlugin,
	exchangeRatesClerkInnPlugin,
	customersPlugin,
	costCenterPlugin,
	cashPlugin,
	paymentStatesPlugin,
	subsidiariesClerkinnPlugin,
	typeTransactionBank,
	typeMovementPlugin,
	typeEntityPlugin,
	transactionBank,
	taxesSunatPlugin,
	groupPlugin,
	purchaseDocumentsPlugin,
	typeTransactionSupplierPlugin,
	supplierTypePlugin,
	zonePlugin,
	entityStatePlugin,
	catalogSunatClerknnPlugin,
	modulePlugin,
	bankReconcilementPlugin,
	bankOperationPlugin,
	warehousePlugin,
	withholdingTaxPlugin,
	courierPlugin,
	salOrdersPlugin,
	salOrderAnnexPlugin,
	orderStatesPlugin,
	customerAddressPlugin,
	originIncomePlugin,
	parishPlaugin,
	cityPlugin,
	provincePlugin,
	companyTemplatePlugin,
	dashboardPlugin,
	typeTransferKardex,
	statusOrcPlugin,
	importCustomersPlugin,
	groupTablePlugin,
	groupChargesPlugin,
	typeWorkingRelationship,
	recognitionsPlugin,
	reprimandsPlugin,
	familyMembersPlugin,
	dateControlPlugin,
	additionalFieldsPlugin,
	employeeCompanyCreateRoute,
	ballotSummaryPlugin,
	summaryUnsubscribePlugin,
	conceptsRoute,
	payrollHeadingRoute,
	payrollDetailsRoute,
	paymentTransactionPlugin,
	comWayPaymentCommercePlugin,
	comEcommerceCompany,
	sellerPlugin,
	zonesPlugin,
	routerPlugin,
	googleMapsPlugin,
	liquidationsPlugin,
	routesCheckInPlugin,
	kardexMovementPlugin,
	typeTransactionPlugin,
	documentAccountStatusPlugin,
	collectionTransactionPlugin,
	devicesPlugin,
	registerSyncPlugin,
	typeBillingPlugin,
	purchaseAnnexCreateRoute,
	comCommerceInformation,
	hapiAxios,
	authenticatePlugin,
	deliveryRouterPlugin,
	orderPickStatePlugin,
	routeStatePlugin,
	vehiclesPlugin,
	msDevicePlugin,
	processPlugin,
	integrationsPlugin,
	claimBookPlugin,
	apiLocationPlugin,
	paymentGatewayPlugin,
	typeTransportPlugin,
	typeProcessPlugin,
	deliveryPlugin,
	urlShortener,
	accountingIntegrationPlugin,
	itemCommercePlugin,
	comFairs,
	deliveryTrackingPlugin,
	gatewayTransactionsPlugin,
	retentionCodePlugin,
	withholdingCompanyPlugin,
	transportAgencyPlugin,
	customersBenefitsPlugin,
	msTypeGeneral,
];

if (isDevOrProd()) {
	plugins.push({
		plugin: raven,
		options: {
			environment: process.env.NODE_ENV,
			dsn: process.env.SENTRY_DNS,
		},
	});

	plugins.push({
		plugin: statusPlugin,
		options: {
			path: '/',
			title: 'Sales Maki',
			routeConfig: {
				auth: false,
			},
		},
	});
}

module.exports = plugins;
