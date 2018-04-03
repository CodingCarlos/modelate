const fs = require('fs');
const directory = __dirname + '/validators';

// Add validator names here
const validators = fs.readdirSync(directory).map(function(file) {
	const name = file.replace('.js', '');
	return {
		name: name,
		check: require(directory + '/' + name),
	};
});

/**
 *	Validate
 *	
 *	@param data {Object} Data to validate
 *	@param model {Object} Model to apply validations
 */
function validate(data, model, errors) {
	if (!errors) {
		errors = [];
	} else if (!Array.isArray(errors)) {
		throw new TypeError('Validation errors is not an array.');
		return false;
	}

	for (let i = 0; i < validators.length; i++) {
		if (!validators[i].check(data, model)) {
			const error = {
				validator: validators[i].name,
				value: data
			}

			errors.push(error);

			return false;
		}
	}

	return true;
}

module.exports = {
	validators: validators, 
	check: validate 
};
