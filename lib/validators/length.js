/**	
 *	Length validator
 *
 *	{
 *		length: {
 *			max: Number,	// Maximum allowed value
 *			min: Number		// Minimum allowed value
 *		}
 *	}
 */

function isValid(data, model) {
	if(!model.length) {
		return true;
	}

	// Data is higher than max 
	if(model.length.max && data.length > model.length.max) {
		return false;
	}

	// Data is lower than min
	if(model.length.min && data.length < model.length.min) {
		return false;
	}

	return true;
}

module.exports = isValid;