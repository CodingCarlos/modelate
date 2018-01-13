/**/
const model = require('./lib/model');
const modelate = require('./lib/modelate');

// const models = model.models;


function Modelate(name) {
	const self = this;

	self.modelName = name;
	self.model = model.get;
	self.set = model.add;
	self.modelate = modelate;

	// models[name] = {};

	return this;
}


module.exports = Modelate;
