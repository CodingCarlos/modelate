const util = require('../lib/util');
const models = require('../lib/model').models;
const modelate = require('../lib/modelate');
const Modelate = {
	// modelName: undefined,
	modelate: modelate
};

// Test data
const modelName = 'Test';
const modelExample = {
	property: {}
};
const dataExample = {
	property: 'hello'
};

// Model management
const model = {
	add: function () {
		models[modelName] = modelExample;
	},
	rem: function () {
		delete models[modelName];
	}
};

// Start testing
describe(' - Modelate', () => {
	it('shall be a function (a constructor)', () => {
		expect(typeof modelate).toEqual('function');
	});
	
	it('shall create objects', () => {
		const User = modelate();
		expect(User).toBeDefined();
		expect(typeof User).toEqual('object');
	});

	describe('without params', () => {
		it('shall return an empty object if no modelName specified', () => {
			expect(Modelate.modelate(dataExample)).toEqual({data: {}, error: null});
		});

		it('shall return an empty object if no modelName specified and no params', () => {
			expect(Modelate.modelate()).toEqual({data: {}, error: null});
		});


		it('shall return an empty object if modelName specified', () => {
			Modelate.modelName = modelName;
			const result = new Modelate.modelate(dataExample);
			
			expect(typeof result).toEqual('object');
			expect(result.data).toEqual({});
			expect(result.error).toEqual(null);
			
			delete Modelate.modelName;
		});

		it('shall return an empty modelate object if modelName specified and no params', () => {
			Modelate.modelName = modelName;
			const result = new Modelate.modelate();
			
			expect(typeof result).toEqual('object');
			expect(result.data).toEqual({});
			expect(result.error).toEqual(null);
			
			delete Modelate.modelName;
		});

		describe('modelate data', () => {
			it('shall remove invalid properties', () => {
				// Prepare Modelate models
				Modelate.modelName = modelName;
				model.add(modelExample);

				// Prepare data
				const data = util.clone(dataExample);
				data.invalidProp = 'shall be removed';

				// Modelate response
				const response = Modelate.modelate(data);

				expect(response.data).toEqual(dataExample);

				// Reset Modelate
				delete Modelate.modelName;
				model.rem(modelExample);
			});
		});
	});
});