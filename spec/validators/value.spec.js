const valid = require('../../lib/validators/value');

const str = 'Hello world';
// const obj = {hello: 'world'};
const num = 42;
const bool = true;

const types = {
	string: str,
	// object: obj, 
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
					model.value = { 
						eq: types[typesKeys[validType]]
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
		// ToDo: TEST MAX FILTER
	});

	describe('min filter', () => {
		// ToDo: TEST MIN FILTER
	});
	
	describe('contains filter', () => {
		// ToDo: TEST CONTAINS FILTER
	});

});
