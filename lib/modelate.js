const util = require('./util');

const models = require('./model').models;
const validate = require('./validate').check;

/**
 *	Create a new modelate, validating all properties
 *	Options might be:
 *	 - model: {Object} A model to use (instead of this.modelName)
 *	@param data {Object} The data to validate
 *	@param opts {Object} Options for the modelate.
 */
function modelate(data, opts) {
	if ((!this.modelName && opts && !opts.model) || !data) {
		return {};
	}

	const model = (opts && opts.model) || models[this.modelName];
	const result = util.clone(model);

	for (const prop in model) {
		if (validate(data[prop], model[prop])) {
			result[prop] = data[prop];
		} else {
			delete result[prop];
		}
	}

	return result;
}

module.exports = modelate;
