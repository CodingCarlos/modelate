var Modelate = require('../index');

const modelName = 'User';
const modelExample = {
	property: {}
};
const dataExample = {
	property: 'hello'
};

describe('Modulate exported', () => {
	it('shall be a function (a constructor)', () => {
		expect(typeof Modelate).toEqual('function');
	});
	
	it('shall create objects', () => {
		const User = Modelate(modelName);
		expect(User).toBeDefined();
	});

	it('objects shall have a valid modelName', () => {
		const User = Modelate(modelName);
		expect(User.modelName).toBeDefined();
		expect(User.modelName).toEqual(modelName);
	});

	it('objects shall have a valid model getter', () => {
		const User = Modelate(modelName);
		expect(User.model).toBeDefined();
		expect(typeof User.model).toEqual('function');
	});

	it('objects shall have a valid model setter', () => {
		const User = Modelate(modelName);
		expect(User.set).toBeDefined();
		expect(typeof User.set).toEqual('function');
	});

	it('objects shall have a valid property to modelate', () => {
		const User = Modelate(modelName);
		expect(User.modelate).toBeDefined();
		expect(typeof User.modelate).toEqual('function');
	});


	describe('getter', () => {
		it('shall return an empty object when nothing set', () => {
			const User = Modelate(modelName);
			const model = User.model();
			expect(model).toBeDefined();
			expect(model).toEqual({});
		});
	});
	
	describe('getter/setter', () => {
		it('shall return a valid model when setted', () => {
			const User = Modelate(modelName).set(modelExample);
			const model = User.model();
			expect(model).toBeDefined();
			expect(Object.assign({}, model)).toEqual(Object.assign({}, modelExample));
		});
	});
	
	describe('modelate', () => {
		it('shall return an empty object if called with no data', () => {
			const User = Modelate(modelName).set({modelExample});
			const data = User.modelate();
			expect(data).toBeDefined();
			expect(Object.assign({}, data)).toEqual(Object.assign({}, {}));
		});

		it('shall return an empty object if called without an object', () => {
			const User = Modelate(modelName).set({modelExample});
			const data = User.modelate(1);
			expect(data).toBeDefined();
			expect(Object.assign({}, data)).toEqual(Object.assign({}, {}));
		});

		it('shall return the same object if no model set', () => {
			const User = Modelate(modelName).set(modelExample);
			const data = User.modelate(dataExample);
			expect(data).toBeDefined();
			expect(Object.assign({}, data)).toEqual(Object.assign({}, dataExample));
		});
	});
});