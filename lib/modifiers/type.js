/**
 *	Type modifier
 *
 *	{
 *		type: value	// Parse to expected type if possible.
 *	}
 */

function modify(data, model) {
	if (!model.type || !data || model.typeStrict == true) {
		return data;
	}

	let parsed = data;

	switch (model.type.toLowerCase()) {
		case 'string':
			if (data) {
				parsed = String(data);
			}
			break;
		case 'number':
			if (!isNaN(Number(data))) {
				parsed = Number(data);
			}
			break;
		case 'boolean':
			parsed = String(data).toLowerCase() === 'true';
			break;
		case 'object':
		case 'array':
			if(typeof data === 'string') {
				try {
					data = JSON.parse(data)
				} catch (e) {
					console.error('Tried to parse invalid json string to ' + model.type.toLowerCase());
				}
			}
			break;
		}

	return parsed;
}


module.exports = modify;
