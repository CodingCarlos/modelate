
/**
 *	Type validator
 *
 *	{
 *		date: true	// Check if data is a Date
 *	}
 */
function isValid(data, model) {
	if (!model.date) {
		return true;
	}

	if (data instanceof Date) {
		return true;
	}
	// Try to parse data to Date;
	var date = Date.parse(data);
	if (!isNaN()) {
		data = new Date(date);
		return true;
	}


	return false;
}


module.exports = isValid;
