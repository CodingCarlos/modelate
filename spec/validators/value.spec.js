const valid = require('../../lib/validators/value');
const util = require('../../lib/util');

// Update tests

const str = 'Hello world';
const obj = {hello: 'world'};
const bool = true;
const num = 42;

const types = {
	string: str,
	boolean: bool,
	// object: util.clone(obj), 
	object: obj, 
	number: num
};
const typesKeys = Object.keys(types);

describe(' - Date validator', () => {	

	it('shall be a function', () => {
		expect(typeof valid).toEqual('function');
	});
	
	describe('no filter specified', () => {
		const model = {
			value: {}
		};

		for (let key in typesKeys) {
			it('shall validate ' + typesKeys[key], () => {
				expect(valid(types[key], model)).toEqual(true);
			});
		}
	});

	describe('equal filter', () => {

		// Again the for loop here! ^^
		for (let validType in typesKeys) {
			describe('type ' + typesKeys[validType], () => {
				const model = {
					value: {}
				};

				beforeEach(function () {
					const val = (typesKeys[validType] === 'object') ? util.clone(obj) : types[typesKeys[validType]];
					model.value = { 
						eq: val
					};
				});

				for (let check in typesKeys) {
					it('shall not be equal than ' +  typesKeys[check], () => {
						expect(valid(types[typesKeys[check]], model)).toEqual( (validType === check) );
					});
				}
			});
		}
	});

	describe('max filter', () => {

		it('shall understand a number', () => {
			const model = {
				value: {
					max: num
				}
			};
			const result = valid(num, model);
			expect(result).toEqual(true);
		});

		it('shall do nothing with anything else', () => {
			const model = {
				value: {
					max: 'num'
				}
			};
			const result = valid(num, model);
			expect(result).toEqual(true);
		});

		it('shall allow numbers lower than expected', () => {
			const model = {
				value: {
					max: num
				}
			};
			const result = valid((num - 1), model);
			expect(result).toEqual(true);
		});

		it('shall allow numbers equal than expected', () => {
			const model = {
				value: {
					max: num
				}
			};
			const result = valid(num, model);
			expect(result).toEqual(true);
		});

		it('shall NOT allow numbers higher than expected', () => {
			const model = {
				value: {
					max: num
				}
			};
			const result = valid((num + 1), model);
			expect(result).toEqual(false);
		});
	});

	describe('min filter', () => {

		it('shall understand a number', () => {
			const model = {
				value: {
					min: num
				}
			};
			const result = valid(num, model);
			expect(result).toEqual(true);
		});

		it('shall do nothing with anything else', () => {
			const model = {
				value: {
					min: 'num'
				}
			};
			const result = valid(num, model);
			expect(result).toEqual(true);
		});

		it('shall NOT allow numbers lower than expected', () => {
			const model = {
				value: {
					min: num
				}
			};
			const result = valid((num - 1), model);
			expect(result).toEqual(false);
		});

		it('shall allow numbers equal than expected', () => {
			const model = {
				value: {
					min: num
				}
			};
			const result = valid(num, model);
			expect(result).toEqual(true);
		});

		it('shall allow numbers higher than expected', () => {
			const model = {
				value: {
					min: num
				}
			};
			const result = valid((num + 1), model);
			expect(result).toEqual(true);
		});
	});
	
	describe('contains filter', () => {
		
		it('shall validate a equal string', () => {
			const model = {
				value: {
					contains: str
				}
			};
			const result = valid(str, model);
			expect(result).toEqual(true);
		});

		it('shall understand a number', () => {
			const model = {
				value: {
					contains: num
				}
			};
			const result = valid(num*100, model);
			expect(result).toEqual(true);
		});

		it('shall validate a sufix string', () => {
			const model = {
				value: {
					contains: str
				}
			};
			const result = valid('hello' + str, model);
			expect(result).toEqual(true);
		});

		it('shall validate a prefix string', () => {
			const model = {
				value: {
					contains: str
				}
			};
			const result = valid(str + 'world', model);
			expect(result).toEqual(true);
		});

		it('shall validate a interfix string', () => {
			const model = {
				value: {
					contains: str
				}
			};
			const result = valid('hello' + str + 'world', model);
			expect(result).toEqual(true);
		});

		it('shall NOT validate an false string', () => {
			const model = {
				value: {
					contains: str
				}
			};
			const result = valid(str.substr(1), model);
			expect(result).toEqual(false);
		});

		it('shall NOT validate an empty string', () => {
			const model = {
				value: {
					contains: str
				}
			};
			const result = valid('', model);
			expect(result).toEqual(false);
		});

	});
});
