var util = require('../util');

/**
 *	Value validator
 *
 *	{
 *		value: {
 *			eq: String || Number,		// Exact allowed value (equals)
 *			max: Number,				// Maximum allowed value
 *			min: Number,				// Minimum allowed value
 *			contains: String || Number	// The value contains
 *			list: Array					// List of exact allowed values
 *		}
 *	}
 */

function isValid(data, model) {
	if (!model.value) {
		return true;
	}

	// Data is different than equals
	if (model.value.eq) {
		if(!equals(data, model.value.eq)) {
			return false;
		}
	}

	if (model.value.list) {
		if(!Array.isArray(model.value.list)) {
			return false;
		}

		for (var i = model.value.list.length - 1; i >= 0; i--) {
			if(!equals(data, model.value.list[i])) {
				return false;
			}
		}
	}

	// Data is higher than max
	if (model.value.max && Number(data) > Number(model.value.max)) {
		return false;
	}

	// Data is lower than min
	if (model.value.min && Number(data) < Number(model.value.min)) {
		return false;
	}

	// Data does not contain something
	if (model.value.contains) {
		var testData = data;
		if(typeof data === 'number') {
			testData = data.toString();
		}

		return (testData.indexOf(model.value.contains) !== -1);
	}

	return true;
}

function equals(data, expected) {
	// Same data type and different values
	if (typeof (data) === typeof (expected) && data !== expected) {
		// If object, return util.compare. Else, return false.
		return (typeof data === 'object') ? util.equal(data, expected) : false;
	}

	// Different types: Try to convert one to other.
	var parsed = data;
	var type = typeof (expected);
	switch (type.toLowerCase()) {
		case 'string':
			parsed = String(data);
			break;
		case 'number':
			parsed = Number(data);
			break;
		case 'boolean':
			parsed = Boolean(data);
			break;
		}

	if (data !== expected) {
		return false;
	}

	return true;
}

module.exports = isValid;
