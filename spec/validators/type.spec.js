var valid = require('../../lib/validators/type');

const str = 'Hello world';
const obj = {hello: 'world'};
const num = 42;
const bool = true;
const arr = [1, 2, 3];

const types = {
	string: str,
	object: obj, 
	number: num,
	boolean: bool,
	array: arr
};
const typesKeys = Object.keys(types);

describe(' - Type validator', () => {
	it('shall be a function', () => {
		expect(typeof valid).toEqual('function');
	});

	for (let key in typesKeys) {
		it('shall validate '+ typesKeys[key] +' when no model set', () => {
			expect(valid(types[key], {})).toEqual(true);
		});
	}

	for (let validType in typesKeys) {
		let model = {type: typesKeys[validType]};
		for (let check in typesKeys) {
			it('shall only validate '+ typesKeys[validType] +' when model set, and '+ typesKeys[check] +' given', () => {
				let shallBeValid = (validType === check);

				// Since arrays are also valid object types, shall do some special check
				if (typesKeys[validType] === 'object' && typesKeys[check] === 'array') {
					shallBeValid = true;
				}				

				expect(valid(types[typesKeys[check]], model)).toEqual(shallBeValid);
			});
		}
	}

});