
// Add modifier names here
const modifiers = ['default'];

// Turn modifier names to modifier instances.
for (let i = 0; i < modifiers.length; i++) {
	modifiers[i] = modifier(modifiers[i]);
}

/**
 *	Validate
 *	
 *	@param data {Object} Data to validate
 *	@param model {Object} Model to apply validations
 */
function modify(data, model) {
	for (let i = 0; i < modifiers.length; i++) {
		const newValue = modifiers[i].check(data, model);
		return newValue ? newValue : data;
	}

	return true;
}

/**
 *	Create new modifier instances
 */
function modifier(name) {
	return {
		name: name,
		check: require('./modifiers/' + name),
	};
}

module.exports = {
	modifiers: modifiers, 
	check: modify 
};
