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

	if (!data && data !== false && data !== 0) {
		return model.default;
	}

	return data;
}


module.exports = modify;
