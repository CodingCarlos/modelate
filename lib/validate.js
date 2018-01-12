

function validate(data, model) {
	let isValid = true;

	if(model.type && typeof(data) === model.type) {
		isValid = true;

		// maxLength
		if(model.maxLength && data.length > model.maxLength) {
			isValid = false;
		}
		// minLenght
		if(model.minLength && data.length < model.minLength) {
			isValid = false;
		}
	} else {
		isValid = false;
	}
	
	return isValid;
}

module.exports = validate;
