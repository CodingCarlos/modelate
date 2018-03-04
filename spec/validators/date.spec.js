const valid = require('../../lib/validators/date');

const model = {
	date: true
};

describe(' - Date validator', () => {	

	it('shall be a function', () => {
		expect(typeof valid).toEqual('function');
	});

	it('shall return true with a valid date', () => {
		const date = new Date();
		const result = valid(date, model);
		expect(result).toEqual(true);
	});

	it('shall return true with a parsable date', () => {
		const date = 'Jan 9, 2018';
		const result = valid(date, model);
		expect(result).toEqual(true);
	});

	it('shall return false with a non parsable date', () => {
		const date = 'NoDate';
		const result = valid(date, model);
		expect(result).toEqual(false);
	});

});
