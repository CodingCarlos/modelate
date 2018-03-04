
/**
 *	Default validator
 *
 *	{
 *		default: value	// If no value set, write this.
 *	}
 */
function isValid(data, model) {
	if (!model.default) {
		return null;
	}

	if (!data) {
		return model.default;
	}
}


module.exports = isValid;
