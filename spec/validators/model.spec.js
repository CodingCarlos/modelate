
/**
 *	How do I test this?
 *
 *	Since Model validator is a very close to the core validator, and it needs 
 *	the validator to be running on top of a "modelate" object, I don't know how
 *	to test this in an appropiate way.
 *
 *	Lot of things to think about.
 */

const valid = require('../../lib/validators/model');

describe(' - Model validator', () => {
	it('shall be a function', () => {
		expect(typeof valid).toEqual('function');
	});

	it('shall not validate a inexistent model', () => {
		const resp = valid({name: ''}, {model: 'MyTestModel'});
		expect(resp).toEqual(false);
	});
	
});
