var valid = require('../../lib/modifiers/default');

const model = {
	default: 'default value'
};

describe(' - Default modifier', () => {
	it('shall be a function', () => {
		expect(typeof valid).toEqual('function');
	});

	it('shall not modify data when no model set', () => {
		expect(valid('validData', {})).toEqual(null);
		expect(valid(undefined, {})).toEqual(null);
	});

	it('shall not modify data if exists and model set', () => {
		expect(valid('validData', model)).toEqual(null);
	});

	it('shall return the default value when not data and model set', () => {
		expect(valid(undefined, model)).toEqual(model.default);
	});
});