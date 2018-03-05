/* Just a first basic test */
var Modelate = require('../../index');
// In production, just change the require for:
// var Modelate = require('modelate');

var model = {
	name: {
		default: 'I am the default value'
	}
};
var user = Modelate('User').set(model);

var data = {};
var result = user.modelate(data);


console.log(result);	// Shall be { name: 'I am the default value' }
