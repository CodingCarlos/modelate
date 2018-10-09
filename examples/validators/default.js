/* Just a first basic test */
var Modelate = require('../../index');
// In production, just change the require for:
// var Modelate = require('modelate');

var model = {
	name: {
		default: 'I am the default value'
	},
	surname: {
		default: 'No surname setted'
	} 
};
var user = Modelate('User').set(model);

var data = {surname: 'Santos'};
var result = user.modelate(data);


console.log(result);	// Shall be { name: 'I am the default value', surname: 'Santos' }
