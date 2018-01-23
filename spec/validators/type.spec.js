var valid = require('../../lib/validators/type');

const str = 'Hello world';
const obj = {hello: 'world'};
const num = 42;

const types = {
	string: str,
	object: obj, 
	number: num
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
				expect(valid(types[typesKeys[check]], model)).toEqual( (validType === check) );
			});
		}
	}

});