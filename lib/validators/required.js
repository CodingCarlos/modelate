/**
 *	Required validator
 *
 *	{
 *		required: Boolean
 *	}
 */

function isValid(data, model) {
	if (!model.required) {
		return true;
	}

	if(model.required && typeof data !== 'undefined') {
		return true;
	}
	
	return false;
}


module.exports = isValid;
