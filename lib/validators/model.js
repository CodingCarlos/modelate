// var util = require('../util');
var models = require('../model').models;

/**
 *	Model validator
 *
 *	{
 *		model: String	// Check if data has a model type
 *	}
 */
function isValid(data, model, errors) {
	if (!model.model) {
		return true;
	}
	if(!models[model.model]) {
		return false;
	}

	// Load parent modelate
	var modelate = module.parent.parent.exports;
	// Launch modelate of data with requested model
	var valid = modelate(data, { 
		model: models[model.model], 
		modelName: model.model 
	}, []);

	// Populate errors to parent model
	if (valid.error) {
		for (var i = 0; i < valid.error.length; i++) {
			errors.push(valid.error[i]);
		}
	}

	// Turn data into a valid model...
	reference(data, valid.data);

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
