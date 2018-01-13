/* Just a first basic test */
var Modelate = require('../index');

// Models
var userModel = {
	name: {
		type: 'string',
		length: {		// For now, length do nothng.
			max: 10,
			min: 1
		},
		value: {
			eq: 'Paco'
		}
	},
	surname: {
		type: 'string',
		length: {		// For now, length do nothng.
			max: 3,
			min: 1
		},
		value: {
			contains: 'os'
		}
	},
	age: {
		type: 'number',
		value: {
			max: 95,
			min: 18
		}
	},
	dni: {
		type: 'string',
		value: {
			max: 95,
			min: 18
		},
		func: function startOnFive(value) {
			if(value.charAt(0) === '5') {
				return true;
			}

			return false;
		}
	}
};
var User = Modelate('User').set(userModel);

// Modelate a user
var myUserData = {
	name: 'Paco',
	surname: 'santos',
	age: 19,
	dni: '51402430A'
};
// var myUser = User.modelate(myUserData);
// console.log(myUser);	

var messageModel = {
	user: {
		model: 'User'
	},
	// date: {
	// 	type: 'date'
	// },
	message: {
		type: 'string',
		length: {
			min: 1,
			max: 255
		}
	}
};
var Message = Modelate('Message').set(messageModel);

// Modelate a message
var myMessageData = {
	message: 'I am using models inside models. Crazy.',
	// date: new Date(),
	// user: myUser
	user: myUserData
};
var myMessage = Message.modelate(myMessageData);
console.log(myMessage);	
