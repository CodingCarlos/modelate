/**/
const model = require('./lib/model');
const modelate = require('./lib/modelate');

console.warn('---');
console.warn('CAUTION!! This is an experimental release of Modelate. Everything might change from one day to other.');
console.warn('---');

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
