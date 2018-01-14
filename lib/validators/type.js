/**	
 *	Type validator
 *
 *	{
 *		type: String	// Check if data has a JS type (uses typeof)
 *	}
 */

function isValid(data, model) {
	if(!model.type) {
		return true;
	}

	if((typeof(data)).toUpperCase() === model.type.toUpperCase()) {
		return true;
	} 

	return false;
}

module.exports = isValid;