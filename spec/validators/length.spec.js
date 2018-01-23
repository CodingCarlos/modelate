var valid = require('../../lib/validators/length');

const str = 'Hello world';
const strLen = str.length;
const arr = ['Hello world', 'other thing'];
const arrLen = arr.length;

const model = {
	length: {}
};


describe(' - Length validator', () => {
	it('shall be a function', () => {
		expect(typeof valid).toEqual('function');
	});

	it('shall validate everything when empty model set', () => {
		expect(valid(str, model)).toEqual(true);
		expect(valid(arr, model)).toEqual(true);
	});

	describe('equal filter', () => {
		describe('strings', () => {
			it('shall validate string with string.length', () => {
				const eqModel = { length: { eq: strLen } };
				expect(valid(str, eqModel)).toEqual(true);
			});

			it('shall NOT validate string with string.length - 1', () => {
				const eqModel = { length: { eq: (strLen - 1) } };
				expect(valid(str, eqModel)).toEqual(false);
			});

			it('shall NOT validate string with string.length + 1', () => {
				const eqModel = { length: { eq: (strLen + 1) } };
				expect(valid(str, eqModel)).toEqual(false);
			});
		});

		describe('arrays', () => {
			it('shall validate array with array.length', () => {
				const eqModel = { length: { eq: arrLen } };
				expect(valid(arr, eqModel)).toEqual(true);
			});

			it('shall NOT validate array with array.length - 1', () => {
				const eqModel = { length: { eq: (arrLen - 1) } };
				expect(valid(arr, eqModel)).toEqual(false);
			});

			it('shall NOT validate array with array.length + 1', () => {
				const eqModel = { length: { eq: (arrLen + 1) } };
				expect(valid(arr, eqModel)).toEqual(false);
			});
		});
	});

	describe('max filter', () => {
		describe('strings', () => {
			it('shall validate string with max string.length', () => {
				const eqModel = { length: { max: strLen } };
				expect(valid(str, eqModel)).toEqual(true);
			});

			it('shall NOT validate string with max string.length - 1', () => {
				const eqModel = { length: { max: (strLen - 1) } };
				expect(valid(str, eqModel)).toEqual(false);
			});

			it('shall validate string with max string.length + 1', () => {
				const eqModel = { length: { max: (strLen + 1) } };
				expect(valid(str, eqModel)).toEqual(true);
			});
		});

		describe('arrays', () => {
			it('shall validate array with max array.length', () => {
				const eqModel = { length: { max: arrLen } };
				expect(valid(arr, eqModel)).toEqual(true);
			});

			it('shall NOT validate array with max array.length - 1', () => {
				const eqModel = { length: { max: (arrLen - 1) } };
				expect(valid(arr, eqModel)).toEqual(false);
			});

			it('shall validate array with max array.length + 1', () => {
				const eqModel = { length: { max: (arrLen + 1) } };
				expect(valid(arr, eqModel)).toEqual(true);
			});
		});
	});

	describe('min filter', () => {
		describe('strings', () => {
			it('shall validate string with min string.length', () => {
				const eqModel = { length: { min: strLen } };
				expect(valid(str, eqModel)).toEqual(true);
			});

			it('shall validate string with min string.length - 1', () => {
				const eqModel = { length: { min: (strLen - 1) } };
				expect(valid(str, eqModel)).toEqual(true);
			});

			it('shall NOT validate string with min string.length + 1', () => {
				const eqModel = { length: { min: (strLen + 1) } };
				expect(valid(str, eqModel)).toEqual(false);
			});
		});

		describe('arrays', () => {
			it('shall validate array with min array.length', () => {
				const eqModel = { length: { min: arrLen } };
				expect(valid(arr, eqModel)).toEqual(true);
			});

			it('shall validate array with min array.length - 1', () => {
				const eqModel = { length: { min: (arrLen - 1) } };
				expect(valid(arr, eqModel)).toEqual(true);
			});

			it('shall NOT validate array with min array.length + 1', () => {
				const eqModel = { length: { min: (arrLen + 1) } };
				expect(valid(arr, eqModel)).toEqual(false);
			});
		});
	});

});