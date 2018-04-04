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
			}
			break;
		case 'boolean':
			parsed = Boolean(data);
			break;
		default:
			console.error('WOWOOWOWOWOWOWOWOWOWOWO');
			console.error(data);
			console.error(model.type);
			break;
		}

	console.log('-------------');
	console.log(data);
	console.log(parsed);
	console.log(model.type);
	console.log('-------------');

	return parsed;
}


module.exports = modify;
