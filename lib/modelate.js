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
	const modelateResponse = {
		data: {},
		error: null
	}

	if ((!this.modelName && !(opts && !opts.model)) || !data || typeof data !== 'object') {
		return modelateResponse;
	}

	const model = (opts && opts.model) || models[this.modelName];
	const result = util.clone(model) || {};
	const errors = [];

	for (const prop in model) {
		// Step 1: Apply the modifiers
		data[prop] = modify(data[prop], model[prop]);

		// Step 2: validate the result
		if (validate(data[prop], model[prop], errors, this.modelName, prop)) {
			result[prop] = data[prop];
		} else {
			delete result[prop];
		}
	}

	modelateResponse.data = result;
	modelateResponse.error = (errors.length !== 0) ? errors : null;

	return modelateResponse;
}

module.exports = modelate;
