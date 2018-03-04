/**
 *	Default modifier
 *
 *	{
 *		default: value	// If no value set, write this.
 *	}
 */

function modify(data, model) {
	if (!model.default) {
		return null;
	}

	if (!data) {
		return model.default;
	}

	return null;
}


module.exports = modify;
