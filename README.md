# modelate
![shieldsIO](https://img.shields.io/github/issues/CodingCarlos/modelate.svg)
![shieldsIO](https://img.shields.io/github/release/CodingCarlos/modelate.svg)
![shieldsIO](https://img.shields.io/github/license/CodingCarlos/modelate.svg)
![shieldsIO](https://img.shields.io/david/CodingCarlos/modelate.svg)
[![Build Status](https://travis-ci.org/CodingCarlos/modelate.svg?branch=master)](https://travis-ci.org/CodingCarlos/modelate)

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
 - [Date](#date)
 - [Model](#model)
 
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
	if (allowedValues.indexOf(value) === -1) {
		return false;
	}
	return true;
}
```

## Date
Check if data is a JavaScript Date. Just need to set a boolean `date` parameter, like: 

```javascript
{
	data: Boolean	// Check if data is a JS Date
}
```
> _Remember that JavaScript dates has type `Object`_


## Model
Yes, models can also validate (and modelate) other models. It's just neccessary the model to exists. To add that model validation, just set a property "model", with the string value of the model name:

```javascript
{
	model: String	// Check if data is of a defined model
}
```
An example of when and how to use it, would be a geopoint:
```javascript
var coords = Modelate('Coords').set({ 
	lat: {
		type: 'number'
	}, 
	lon: {
		type: 'number'
	}
});

var geopoint = Modelate('Geopoint').set({
	coords: {
		model: 'Coords'
	},
	name: {
		type: 'String',
		length: {
			max: 140
		}
	}
});

// Now, you can validate Geopoint objects ^^
var myGeopoint = {
	name: 'Batman Symbol',
	coords: {
		lat: 26.357896,
		long: 127.783809
	}
};

var batman = geopoint.modelate(myGeopoint);
console.log(batman);
```
