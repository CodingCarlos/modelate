/* Just a first basic test */
var Modelate = require('./index');

var model = {
	name: {
		type: 'string',
		length: {		// For now, length do nothng.
			max: 10,
			min: 1
		}
	}
};
var user = Modelate('User').model(model);

var data = {
	name: 'Paco',
	surname: 'santos'	// Surname shall be removed
};
var result = user.modelate(data);


console.log(result);	// Shall be { name: 'Paco' }
