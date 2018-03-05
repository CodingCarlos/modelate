const fs = require('fs');
const directory = __dirname + '/modifiers';

// Add validator names here
const modifiers = fs.readdirSync(directory).map(function(file) {
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
function modify(data, model) {
	for (let i = 0; i < modifiers.length; i++) {
		const newValue = modifiers[i].check(data, model);
		return newValue ? newValue : data;
	}

	return true;
}

module.exports = {
	modifiers: modifiers, 
	check: modify 
};
