/**
 *	Default modifier
 *
 *	{
 *		default: value	// If no value set, write this.
 *	}
 */

function modify(data, model) {
	if (!model.default) {
		return data;
	}

	if (!data) {
		return model.default;
	}

	return data;
}


module.exports = modify;
