/**
 *	Regex validator
 *
 *	{
 *		regex: Regex
 *	}
 */

function isValid(data, model) {
	if (!model.regex) {
		return true;
	}

	if(typeof model.regex === 'object' && typeof model.regex.test === 'function') {
		return model.regex.test(data);
	}
	
	return false;
}


module.exports = isValid;
