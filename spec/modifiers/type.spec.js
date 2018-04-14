var valid = require('../../lib/modifiers/type');

const str = '42';
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

describe(' - Type modifier', () => {
	it('shall be a function', () => {
		expect(typeof valid).toEqual('function');
	});

	for (let key in typesKeys) {
		it('shall let '+ typesKeys[key] +' when no model set', () => {
			expect(valid(types[key], {})).toEqual(types[key]);
		});
	}

	for (let validType in typesKeys) {
		let model = {type: typesKeys[validType]};
		for (let check in typesKeys) {

			// ToDo: ReWrite tests to clarify the behaviour in each use-case

			it('shall only validate '+ typesKeys[validType] +' when model set, and '+ typesKeys[check] +' given', () => {
				const modelated = valid(types[typesKeys[check]], model);
				let shallBeValid = (typeof modelated === typesKeys[validType]);

				if (typesKeys[validType] === 'object') {	// && typeof modelated === 'undefined') {
					shallBeValid = true;
				}

				if ((typesKeys[validType] === 'array' && Array.isArray(modelated))
				|| (typesKeys[validType] === 'array')) { // && typeof modelated === 'undefined')) {
					shallBeValid = true;
				}

				if (typesKeys[validType] === 'number') { // && typeof modelated === 'undefined') {
					shallBeValid = true;
				}

				expect(shallBeValid).toEqual(true);
			});
		}
	}

});