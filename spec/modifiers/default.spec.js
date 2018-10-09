var valid = require('../../lib/modifiers/default');

const model = {
	default: 'default value'
};

describe(' - Default modifier', () => {
	it('shall be a function', () => {
		expect(typeof valid).toEqual('function');
	});

	it('shall not modify data when no model set', () => {
		expect(valid('validData', {})).toEqual('validData');
		expect(valid(undefined, {})).toEqual(undefined);
	});

	it('shall not modify data if exists and model set', () => {
		expect(valid('validData', model)).toEqual('validData');
	});

	it('shall return the default value whith undefined as data and model set', () => {
		expect(valid(undefined, model)).toEqual(model.default);
	});

	it('shall return "undefined" whith "undefined" (string) as data and model set', () => {
		expect(valid('undefined', model)).toEqual('undefined');
	});

	it('shall return the default value with empty string (\'\') as data and model set', () => {
		expect(valid('', model)).toEqual(model.default);
	});

	it('shall return the default value with null as data and model set', () => {
		expect(valid(null, model)).toEqual(model.default);
	});

	it('shall return the default value with NaN as data and model set', () => {
		expect(valid(NaN, model)).toEqual(model.default);
	});

	it('shall return false (boolean) with false (boolean) as data and model set', () => {
		expect(valid(false, model)).toEqual(false);
	});

	it('shall return "false" (string) with "false" (string) as data and model set', () => {
		expect(valid("false", model)).toEqual("false");
	});

	it('shall return 0 with 0 as data and model set', () => {
		expect(valid(0, model)).toEqual(0);
	});
});