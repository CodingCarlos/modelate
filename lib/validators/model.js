var util = require('../util');
var models = require('../model').models;
// var validate = require('../validate');

/**	
 *	Type validator
 *
 *	{
 *		type: String	// Check if data has a JS type (uses typeof)
 *	}
 */
function isValid(data, model) {
	if(!model.model) {
		return true;
	}

	var validate = module.parent.parent.exports;
	var valid = validate(data, {model: models[model.model]});

	// var eq = util.equal(data, valid);
	// return eq;
	
	// Turn data into a valid model...
	reference(data, valid);
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
	for (let p in origin) {
		delete origin[p];
	}

	// Insert new data
	for (let p in newObj) {
		origin[p] = newObj[p];
	}

}

module.exports = isValid;
