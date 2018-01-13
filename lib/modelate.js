const util = require('./util');

const models = require('./model').models;
const validate = require('./validate');

// var modelate = function modelate(data) {
function modelate(data) {
	const model = util.clone(models[this.modelName]);

	for(let prop in model) {
		if(validate(data[prop], model[prop])) {
			model[prop] = data[prop];
		} else {
			delete model[prop];
		}
	}

	return model;
}

module.exports = modelate;
