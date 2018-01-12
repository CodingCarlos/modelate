const util = require('./util');

const models = require('./model').models;
const validate = require('./validate');

function modelate(data) {
	console.log('modeling', data, 'for object with type', this.modelName);

	const model = util.clone(models[this.name]);

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
