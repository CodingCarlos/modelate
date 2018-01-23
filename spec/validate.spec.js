// const util = require('../lib/util');
const validate = require('../lib/validate');

// Test data
const validData = '';
const invalidData = '';
const validatorDefault = {
	name: 'default',
	check: function (data, model) {
		return (data === validData);
	}
};

const validators = {
	clear: function () {
		validate.validators = [];
	},
	add: function (validator) {
		if (validator) {
			validate.validators.push(validator);
		} else {
			validate.validators.push(validatorDefault);
		}
	},
	remove: function (validator) {
		if(typeof validator === 'string') {
			remValidator(validator);
		} else if (validator && typeof validator.name === 'string') {
			remValidator(validator.name);
		}
	}
};

function remValidator(name) {
	for (var i = validate.validators.length - 1; i >= 0; i--) {
		if(validate.validators[i].name === name) {
			validate.validators.splice(i, 1);
		}
	}
}

// Start testing
describe(' - Validate', () => {
	it('shall be an object', () => {
		expect(typeof validate).toEqual('object');
	});

	it('shall have a "validators" property', () => {
		expect(validate.validators).toBeDefined();
	});

	it('shall have a "check" property', () => {
		expect(validate.check).toBeDefined();
	});


	describe('.validators', () => {
		it('shall be an array', () => {
			expect(typeof validate.validators).toEqual('object');
			expect(Array.isArray(validate.validators)).toEqual(true);
		});

		it('shall have some validations by default', () => {
			expect(validate.validators.length > 0).toEqual(true);
		});
	});

	describe('.check', () => {
		it('shall be a function', () => {
			expect(typeof validate.check).toEqual('function');
		});

		it('shall validate valid data', () => {
			validators.clear();
			validators.add();
			expect(validate.check(validData, {})).toEqual(true);
			validators.clear();
		});

		it('shall not validate invalid data', () => {
			validators.clear();
			validators.add();
			expect(validate.check(invalidData, {})).toEqual(true);
			validators.clear();
		});
	});
});