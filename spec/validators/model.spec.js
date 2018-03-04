
/**
 *	How do I test this?
 *
 *	Since Model validator is a very close to the core validator, and it needs 
 *	the validator to be running on top of a "modelate" object, I don't know how
 *	to test this in an appropiate way.
 *
 *	Lot of things to think about.
 */

// const valid = require('../../lib/validators/model');

const validate = {
	valid: require('../../lib/validators/model')
};
const valid = validate.valid;

describe(' - Model validator', () => {
	it('shall be a function', () => {
		expect(typeof valid).toEqual('function');
	});

	it('shall return true if no model passed', () => {
		const resp = valid({name: ''}, {});
		expect(resp).toEqual(true);
	});

	it('shall not validate a inexistent model', () => {
		const resp = valid({name: ''}, {model: 'MyTestModel'});
		expect(resp).toEqual(false);
	});
});
