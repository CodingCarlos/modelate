/**	
 *	Value validator
 *
 *	{
 *		value: {
 *			eq: String || Number,		// Exact allowed value (equals)
 *			max: Number,				// Maximum allowed value
 *			min: Number,				// Minimum allowed value
 *			contains: String || Number	// The value contains 
 *		}
 *	}
 */

function isValid(data, model) {
	if(!model.value) {
		return true;
	}

	// Data is different than equals
	if(model.value.eq) {
		if(typeof(data) === typeof(model.value.eq) && data !== model.value.eq) {
			// Same data type and different values
			return false;
		} else { 
			// Different types: Try to convert one to other.
			var parsed = data;
			var type = typeof(model.value.eq);
			switch(type.toLowerCase()) {
				case 'string':
					parsed = String(data);
					break;
				case 'number':
					parsed = Number(data);
					break;
				case 'boolean':
					parsed = Boolean(data);
					break;
			}

			if(data !== model.value.eq) {
				return false;
			}
		}
	}

	// Data is higher than max 
	if(model.value.max && Number(data) > Number(model.value.max)) {
		return false;
	}

	// Data is lower than min
	if(model.value.min && Number(data) < Number(model.value.min)) {
		return false;
	}

	// Data does not contain something
	if(model.value.contains && data.indexOf(model.value.contains) === -1) {
		return false;
	}

	return true;
}

module.exports = isValid;