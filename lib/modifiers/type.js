/**
 *	Type modifier
 *
 *	{
 *		type: value	// Parse to expected type if possible.
 *	}
 */

function modify(data, model) {
	if (!model.type) {
		return data;
	} else if(model.typeStrict == true) {
		return data;
	}

	let parsed = data;

	switch (model.type.toLowerCase()) {
		case 'string':
			parsed = String(data);
			break;
		case 'number':
			if (!isNaN(Number(data))) {
				parsed = Number(data);
			} else {
				parsed = undefined;
			}
			break;
		case 'boolean':
			parsed = String(data).toLowerCase() === 'true';
			break;
		case 'object':
			parsed = (typeof data === 'object') ? data : undefined;
			break;
		case 'array':
			parsed = (Array.isArray(data)) ? data : undefined;
			break;
		}

	return parsed;
}


module.exports = modify;
