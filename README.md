# modelate
![shieldsIO](https://img.shields.io/github/issues/CodingCarlos/modelate.svg)
![shieldsIO](https://img.shields.io/github/release/CodingCarlos/modelate.svg)
![shieldsIO](https://img.shields.io/github/license/CodingCarlos/modelate.svg)
![shieldsIO](https://img.shields.io/david/CodingCarlos/modelate.svg)
[![Build Status](https://travis-ci.org/CodingCarlos/modelate.svg?branch=master)](https://travis-ci.org/CodingCarlos/modelate)

A data modeling tool for NodeJS. It's 100% database agnostic, and 100% customizable.

# How to install
Use NPM to install the package:
```
npm install modelate --save
```

# How does it work?
Create a model, and turn your objects into that model. 

```javascript
var Modelate = require('modelate');

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

# Tests

I'm currently adding tests to this code. I'm using Jasmine, and saving tests in `/spec` folder.

To run tests, just execute:
```
npm test
```

First time you run tests, you might need to install Jasmine, and other possible test dependencies. To do it fastly, just execute:
```
npm install
```

And now you can run tests ^^

## Test coverage:
Master version might not have the last test updates. Check out the `develop` branch to see the last updates. Also, the actual test coverage (in `develop` branch) is fully referenced in #3 issue.

 - [x] Core
	 - [x] Exported module
	 - [x] Model
	 - [x] Modelate
	 - [x] Validate
 - [ ] Validators
	 - [x] Type
	 - [x] Length
	 - [x] Value
	 - [x] Custom function
	 - [x] Date
	 - [ ] Model (Need help with this #15)

# Contribute
You can use this code as you like. If you find a bug, or want to ask for a feature, just open an issue, and we'll do our best. If you can fix it, do a pull request to dev branch, and we promise to review it as fast as possible to merge it.

If you are new on this open source world, here is a short guide about how to make a pull request to contribute:

 1. Fork then clone `git clone git@github.com:your-username/modelate.git` **CodingCarlos/modelate** repository.
 2. Create a new branch in **your personal forked repo**, with a name similar to your edits, such as `fix-whatever`.
 3. Make your edits inside your new branch.
 4. Commit them and push them back to **your personal github fork**.
 5. Make a new Pull Request on the **CodingCarlos/modelate** repo. Point your branch to the `dev` `CodingCarlos/modelate`'s branch and submit.
 6. We will do my best to review and accept the code as soon as possible.
