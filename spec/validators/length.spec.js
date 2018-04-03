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

			it('shall NOT validate undefined string', () => {
				const eqModel = { length: { eq: (strLen - 1) } };
				expect(valid(undefined, eqModel)).toEqual(false);
			});

			it('shall NOT validate null string', () => {
				const eqModel = { length: { eq: (strLen - 1) } };
				expect(valid(null, eqModel)).toEqual(false);
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

			it('shall NOT validate undefined string', () => {
				const eqModel = { length: { eq: arrLen } };
				expect(valid(undefined, eqModel)).toEqual(false);
			});

			it('shall NOT validate null string', () => {
				const eqModel = { length: { eq: arrLen } };
				expect(valid(null, eqModel)).toEqual(false);
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
				const maxModel = { length: { max: strLen } };
				expect(valid(str, maxModel)).toEqual(true);
			});

			it('shall NOT validate undefined', () => {
				const maxModel = { length: { max: (strLen - 1) } };
				expect(valid(undefined, maxModel)).toEqual(false);
			});

			it('shall NOT validate null', () => {
				const maxModel = { length: { max: (strLen - 1) } };
				expect(valid(null, maxModel)).toEqual(false);
			});

			it('shall NOT validate string with max string.length - 1', () => {
				const maxModel = { length: { max: (strLen - 1) } };
				expect(valid(str, maxModel)).toEqual(false);
			});

			it('shall validate string with max string.length + 1', () => {
				const maxModel = { length: { max: (strLen + 1) } };
				expect(valid(str, maxModel)).toEqual(true);
			});
		});

		describe('arrays', () => {
			it('shall validate array with max array.length', () => {
				const maxModel = { length: { max: arrLen } };
				expect(valid(arr, maxModel)).toEqual(true);
			});

			it('shall NOT validate undefined', () => {
				const maxModel = { length: { max: (arrLen - 1) } };
				expect(valid(undefined, maxModel)).toEqual(false);
			});

			it('shall NOT validate null', () => {
				const maxModel = { length: { max: (arrLen - 1) } };
				expect(valid(null, maxModel)).toEqual(false);
			});

			it('shall NOT validate array with max array.length - 1', () => {
				const maxModel = { length: { max: (arrLen - 1) } };
				expect(valid(arr, maxModel)).toEqual(false);
			});

			it('shall validate array with max array.length + 1', () => {
				const maxModel = { length: { max: (arrLen + 1) } };
				expect(valid(arr, maxModel)).toEqual(true);
			});
		});
	});

	describe('min filter', () => {
		describe('strings', () => {
			it('shall validate string with min string.length', () => {
				const minModel = { length: { min: strLen } };
				expect(valid(str, minModel)).toEqual(true);
			});

			it('shall NOT validate undefined', () => {
				const minModel = { length: { min: strLen } };
				expect(valid(undefined, minModel)).toEqual(false);
			});

			it('shall NOT validate null', () => {
				const minModel = { length: { min: strLen } };
				expect(valid(null, minModel)).toEqual(false);
			});

			it('shall validate string with min string.length - 1', () => {
				const minModel = { length: { min: strLen -1 } };
				expect(valid(str, minModel)).toEqual(true);
			});

			it('shall NOT validate string with min string.length + 1', () => {
				const minModel = { length: { min: strLen + 1 } };
				expect(valid(str, minModel)).toEqual(false);
			});
		});

		describe('arrays', () => {
			it('shall validate array with min array.length', () => {
				const minModel = { length: { min: arrLen } };
				expect(valid(arr, minModel)).toEqual(true);
			});

			it('shall NOT validate undefined', () => {
				const minModel = { length: { min: arrLen } };
				expect(valid(undefined, minModel)).toEqual(false);
			});

			it('shall NOT validate null', () => {
				const minModel = { length: { min: arrLen } };
				expect(valid(null, minModel)).toEqual(false);
			});

			it('shall validate array with min array.length - 1', () => {
				const minModel = { length: { min: (arrLen - 1) } };
				expect(valid(arr, minModel)).toEqual(true);
			});

			it('shall NOT validate array with min array.length + 1', () => {
				const minModel = { length: { min: (arrLen + 1) } };
				expect(valid(arr, minModel)).toEqual(false);
			});
		});
	});

});