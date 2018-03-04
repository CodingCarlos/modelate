/**
 *	Custom function validator
 *
 *	{
 *		func: function	A function to validate. Must return true or false.
 *	}
 */

function isValid(data, model) {
	if (!model.func) {
		return true;
	}

	if(typeof model.func !== 'function') {
		return false;
	}

	return model.func(data);
}

module.exports = isValid;
