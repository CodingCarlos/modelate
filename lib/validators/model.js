var util = require('../util');
var models = require('../model').models;

/**
 *	Model validator
 *
 *	{
 *		model: String	// Check if data has a model type
 *	}
 */
function isValid(data, model) {
	if (!model.model) {
		return true;
	}

	var validate = module.parent.parent.exports;
	var valid = validate(data, { model: models[model.model] });

	// Return if data is of model's type.
	// var eq = util.equal(data, valid);
	// return eq;

	// Turn data into a valid model...
	reference(data, valid);
	// And return true (data is parsed, so data is modelated)
	return true;
}

/**
 *	Replace an object for other keeping the reference
 *
 *	@origin {Object} Object to replace
 *	@newObj {Object} Object to use as new
 */
function reference(origin, newObj) {
	// Clean object
	for (const p in origin) {
		delete origin[p];
	}

	// Insert new data
	for (const p in newObj) {
		origin[p] = newObj[p];
	}
}

module.exports = isValid;
