
// Add validator names here
const validators = ['type', 'length', 'value', 'func', 'model', 'date'];
// const validators = ['type', 'length', 'value', 'func'];

// Turn validator names to validator instances.
for (let i = 0; i < validators.length; i++) {
	validators[i] = validator(validators[i]);
}

// Validate
function validate(data, model) {
	for (let i = 0; i < validators.length; i++) {
		if (!validators[i].check(data, model)) {
			console.error('Validation for "' + data + '" failed! Reason: ', validators[i].name);
			return false;
		}
	}

	return true;
}

// Create new validator instances
function validator(name) {
	return {
		name: name,
		check: require('./validators/' + name),
	};
}


module.exports = { check: validate };
