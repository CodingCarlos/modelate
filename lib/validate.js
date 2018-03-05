const fs = require('fs');
const directory = 'validators';

// Add validator names here
const validators = fs.readdirSync(directory).map(function(file) {
	const name = file.replace('.js', '');
	return {
		name: name,
		check: require('./' + directory + '/' + name),
	};
});

/**
 *	Validate
 *	
 *	@param data {Object} Data to validate
 *	@param model {Object} Model to apply validations
 */
function validate(data, model) {
	for (let i = 0; i < validators.length; i++) {
		if (!validators[i].check(data, model)) {
			console.error('Validation for "' + data + '" failed! Reason: ', validators[i].name);
			return false;
		}
	}

	return true;
}

module.exports = {
	validators: validators, 
	check: validate 
};
