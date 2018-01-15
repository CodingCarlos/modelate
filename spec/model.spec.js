const util = require('../lib/util');
const model = require('../lib/model');

// Test data
const modelName = 'Model';
const modelExample = {
	property: {}
};

// Start testing
describe(' - Model', () => {
	it('shall be an object', () => {
		expect(typeof model).toEqual('object');
	});

	it('shall have a "models" property', () => {
		expect(model.models).toBeDefined();
	});

	it('shall have a "add" property', () => {
		expect(model.add).toBeDefined();
	});

	it('shall have a "get" property', () => {
		expect(model.get).toBeDefined();
	});

	describe('models', () => {
		it('shall be an object', () => {
			expect(typeof model.models).toEqual('object');
		});

		/*it('shall be empty by default', () => {
			// This test does not works because of models set in other tests
			expect(model.models).toEqual({});
		});*/
	});

	describe('getter', () => {
		it('shall be a function', () => {
			expect(typeof model.get).toEqual('function');
		});

		describe('by param name', () => {
			it('shall return defined models', () => {
				model.models[modelName] = modelExample;

				const result = model.get(modelName);

				expect(result).toEqual(modelExample);
				delete model.models[modelName];
			});

			it('shall return empty object on unsetted model name', () => {
				const result = model.get('undefined' + modelName);
				expect(result).toEqual({});
			});

			it('shall return empty object on undefined model name', () => {
				const result = model.get();
				expect(result).toEqual({});
			});
		});

		describe('by this.modelName', () => {
			it('shall return defined models', () => {
				// Set model
				model.models[modelName] = modelExample;
				// Prepare "this" context
				const self = {
					modelName: modelName,
					get: model.get
				}
				// Execute getter on "this" context
				const result = self.get();

				expect(result).toEqual(modelExample);

				// Reset models
				delete model.models[modelName];
			});

			it('shall return empty object on unsetted model name', () => {
				// Prepare "this" context
				const self = {
					modelName: 'undefined' + modelName,
					get: model.get
				}
				// Execute getter on "this" context
				const result = self.get();

				expect(result).toEqual({});
			});

			it('shall return empty object on undefined model name', () => {
				// Prepare "this" context
				const self = {
					get: model.get
				}
				// Execute getter on "this" context
				const result = self.get();

				expect(result).toEqual({});
			});
		});
	});

	describe('adder', () => {
		it('shall be a function', () => {
			expect(typeof model.add).toEqual('function');
		});

		describe('by param name', () => {
			it('shall add models', () => {
				model.add(modelExample, modelName);
				expect(model.models[modelName]).toEqual(modelExample);
				delete model.models[modelName];
			});

			it('shall add nothing when no modelName', () => {
				const keys = Object.keys(model.models);
				model.add(modelExample);
				expect(Object.keys(model.models)).toEqual(keys);
			});

			it('shall add nothing when no data', () => {
				const keys = Object.keys(model.models);
				model.add(undefined, modelName);
				expect(Object.keys(model.models)).toEqual(keys);
			});

			it('shall add nothing when data is not an object', () => {
				const keys = Object.keys(model.models);
				model.add('undefined', modelName);
				expect(Object.keys(model.models)).toEqual(keys);
			});
		});

		describe('by this.modelName', () => {
			it('shall add models', () => {
				// Prepare this context
				const self = {
					modelName: modelName,
					add: model.add
				};

				const keys = Object.keys(model.models);
				self.add(modelExample);
				
				expect(Object.keys(model.models).length).toEqual((keys.length + 1));
				expect(model.models[modelName]).toEqual(modelExample);
				
				// Reset models
				delete model.models[modelName];
			});

			it('shall add nothing when no modelName', () => {
				// Prepare this context
				const self = {
					add: model.add
				};

				const keys = Object.keys(model.models);
				self.add(modelExample);
				
				expect(Object.keys(model.models)).toEqual(keys);
			});

			it('shall add nothing when no data', () => {
				// Prepare this context
				const self = {
					modelName: modelName,
					add: model.add
				};

				const keys = Object.keys(model.models);
				self.add(undefined);
				
				expect(Object.keys(model.models)).toEqual(keys);
			});

			it('shall add nothing when data is not an object', () => {
				// Prepare this context
				const self = {
					modelName: modelName,
					add: model.add
				};

				const keys = Object.keys(model.models);
				self.add('undefined');
				expect(Object.keys(model.models)).toEqual(keys);
			});
		});
	});
});