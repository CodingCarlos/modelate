# modelate
A data modeling tool for NodeJS. It's 100% database agnostic, and 100% customizable.

# How does it work?
Create a model, and turn your objects into that model. 

```javascript
var Modelate = require('./index');

var model = {
	name: {
		type: 'string',
		length: {	
			max: 10,
			min: 1
		},
		value: {
			eq: 'Paco'
		}
	},
	age: {
		type: 'number',
		value: {
			max: 95,
			min: 18
		}
	}
}

var user = Modelate('User').model(model);
var data = {
	name: 'Paco',
	age: 17  // Age does not match with min value
};

var result = user.modelate(data); // => { name: 'Paco }
```
# Validators
Validators are just functions. It will be executed for each property, and return a boolean value indicating if the content match the model requirements or not. 

 - [Type](#type)
 - [Length](#length)
 - [Value](#value)
 - [Custom function](#custom-function)
 
 ## Type
 If the data has not the specifed type, validation will fail, and that field will not be added to final validated data.
 
 ```javascript
 {
     type: String	// Check if data has a JS type (uses typeof)
 }
 ```
  
 ## Length
 Check data length. It uses default .length param, so it's valid for so much types.
 
 ```javascript
{
	length: {
    eq: Number,		// Exact allowed value
		max: Number,	// Maximum allowed value
		min: Number		// Minimum allowed value
	}
}
 ```
 
 ## Value
  Check data length. It uses default .length param, so it's valid for so much types.
 
 ```javascript
{
	value: {
 		eq: String || Number,		// Exact allowed value (equals)
 		max: Number,				// Maximum allowed value
 		min: Number,				// Minimum allowed value
 		contains: String || Number	// The value contains 
 	}
}
 ```

## Custom function
Use a custom function to check at your own criteria. The only necessary thing is the function to return true or false-
 
```javascript
{
	func: function	A function to validate. Must return true or false.
}
```

The function might look like this: 
```javascript
function is42(value) {
  var allowed = [42, '42', 'cuarenta y dos', 'fourty two', 'the answer to the life the universe and everything'];
  if(allowedValues.indexOf(value) === -1) {
    return false;
  }
  return true;
}
```
