const util = require('./util');

const models = require('./model').models;
const validate = require('./validate').check;
const modify = require('./modify').check;

/**
 *	Create a new modelate, validating all properties
 *	Options might be:
 *	 - model: {Object} A model to use (instead of this.modelName)
 *	@param data {Object} The data to validate
 *	@param opts {Object} Options for the modelate.
 */
function modelate(data, opts) {
	if ((!this.modelName && !(opts && !opts.model)) || !data || typeof data !== 'object') {
		return {};
	}

	const model = (opts && opts.model) || models[this.modelName];
	const result = util.clone(model) || {};

	for (const prop in model) {
		// Step 1: Apply the modifiers
		data[prop] = modify(data[prop], model[prop]);

		// Step 2: validate the result
		if (validate(data[prop], model[prop])) {
			result[prop] = data[prop];
		} else {
			delete result[prop];
		}
	}

	return result;
}

module.exports = modelate;
