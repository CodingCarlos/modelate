/**/
const model = require('./lib/model');
const modelate = require('./lib/modelate');

/**
 *	Modelate instance.
 */
function Modelate(name) {
	const self = this;

	self.modelName = name;
	self.model = model.get;
	self.set = model.add;
	self.modelate = modelate;

	return this;
}


module.exports = Modelate;
