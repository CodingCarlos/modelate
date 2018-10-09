/**
 *	Type validator
 *
 *	{
 *		type: String	// Check if data has a JS type (uses typeof)
 *	}
 */

function isValid(data, model) {
	if (!model.type || typeof data === 'undefined') {
		return true;
	}

	if ((typeof data).toUpperCase() === model.type.toUpperCase()) {
		return true;
	} else if (model.type.toUpperCase() === 'ARRAY') {
		return Array.isArray(data);
	}

	return false;
}

module.exports = isValid;
