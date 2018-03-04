var valid = require('../../lib/validators/regex');

const regex = /[a]/;
const validData = 'asd';
const invalidData = 'sdf';

const model = {
	regex: regex
};

describe(' - Regex validator', () => {
	it('shall be a function', () => {
		expect(typeof valid).toEqual('function');
	});

	it('shall validate everything when no model set', () => {
		expect(valid(validData, {})).toEqual(true);
		expect(valid(invalidData, {})).toEqual(true);
	});

	it('shall validate valid patterns when model set', () => {
		expect(valid(validData, model)).toEqual(true);
	});

	it('shall not validate invalid patterns when model set', () => {
		expect(valid(invalidData, model)).toEqual(false);
	});
});