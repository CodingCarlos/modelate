/**
 *	Email validator
 *
 *	{
 *		email: {
 *			domain: String, Array
 *		}
 *	}
 */

function isValid(data, model) {
	if (!model.email) {
		return true;
	}

	if(typeof model.email === 'object' && typeof model.email.domain !== 'undefined') {
		if (isEmail(data)) {
			return validateDomain(data, model.email.domain);
		} else {
			return false;
		}
	}
	
	return isEmail(data);
}

function isEmail(data) {
	// regex from http://emailregex.com/
	const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return emailRegex.test(data);
}

function validateDomain(data, domain) {
	const dataDomain = data.split('@')[1];

	if (typeof domain === 'string') {
		return dataDomain.toUpperCase() === domain.toUpperCase();
	} else if (Array.isArray(domain)) {
		for (var i = domain.length - 1; i >= 0; i--) {
			if(domain[i].toUpperCase() === dataDomain.toUpperCase()) {
				return true;
			}
		}
		return false;
	}

	return false;
}

module.exports = isValid;
