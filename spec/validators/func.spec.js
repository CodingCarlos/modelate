const valid = require('../../lib/validators/func');



describe(' - Function validator', () => {
	

	it('shall be a function', () => {
		expect(typeof valid).toEqual('function');
	});

	describe('is a valid function', () => {
		const model = {};

		beforeEach(function () {
			model.func = function (data) { 
				return !!data; 
			};

			spyOn(model, 'func').and.callThrough();
		});

		it('shall call the function after execution', () => {
			expect(model.func).not.toHaveBeenCalled();
			valid('null', model);
			expect(model.func).toHaveBeenCalled();
		});
	});

	describe('is NOT a valid function', () => {
		const model = {};

		beforeEach(function () {
			model.func = 'invalidData';
		});

		it('shall return false', () => {
			const result = valid('null', model);
			expect(result).toEqual(false);
		});
	});
});
