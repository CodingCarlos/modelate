/* Just a first basic test */
var Modelate = require('../index');
// In production, just change the require for:
// var Modelate = require('modelate');

var model = {
	name: {
		type: 'string',
		length: {
			max: 10,
			min: 1,
		},
		value: {
			eq: 'Paco',
		},
	},
	surname: {
		type: 'string',
		length: {
			max: 3,
			min: 1,
		},
		value: {
			contains: 'os',
		},
	},
	age: {
		type: 'number',
		value: {
			max: 95,
			min: 18,
		},
	},
	dni: {
		type: 'string',
		value: {
			max: 95,
			min: 18,
		},
		func: function startOnFive(value) {
			if (value.charAt(0) === '5') {
				return true;
			}

			return false;
		},
	},
};
var user = Modelate('User').set(model);

var data = {
	name: 'Paco',
	surname: 'santos',
	age: 19,
	dni: '51402430A',
};
var result = user.modelate(data);


console.log(result);	// Shall be { name: 'Paco' }
