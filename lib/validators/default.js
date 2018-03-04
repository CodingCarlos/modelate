
/**
 *	Default validator
 *
 *	{
 *		default: value	// If no value set, write this.
 *	}
 */
function isValid(data, model) {
	if (!model.default) {
		return true;
	}

	if (!data) {
		data = model.default;
	}
}


module.exports = isValid;
