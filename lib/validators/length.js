/**
 *	Length validator
 *
 *	{
 *		length: {
 *			eq: Number,		// Exact allowed value
 *			max: Number,	// Maximum allowed value
 *			min: Number		// Minimum allowed value
 *		}
 *	}
 */

function isValid(data, model) {
	if (!model.length) {
		return true;
	}

	// ToDo: Number length (toString?)
	// ToDo: Object length (keys?)

	// Data hasn't the exact eq lenght
	if (model.length.eq && data.length !== model.length.eq) {
		return false;
	}

	// Data is higher than max
	if (model.length.max && data.length > model.length.max) {
		return false;
	}

	// Data is lower than min
	if (model.length.min && data.length < model.length.min) {
		return false;
	}

	return true;
}

module.exports = isValid;
