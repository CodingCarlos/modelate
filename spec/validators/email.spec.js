var valid = require('../../lib/validators/email');

const email = {
	example: 'email@example.com',
	gmail: 'testing@gmail.com',
	google: 'testing@google.com',
};
const invalidEmail = {
	string: 'emailexamplecom',
	notAt: 'emailexample.com',
	notDot: 'email@example',
	notDomain: 'email@.com',
	notName: '@example.com'
};

const modelBool = {
	email: true
};
const modelStr = {
	email: {
		domain: 'gmail.com'
	}
};
const modelArr = {
	email: {
		domain: ['gmail.com', 'google.com']
	}
};


describe(' - Email validator', () => {
	it('shall be a function', () => {
		expect(typeof valid).toEqual('function');
	});

	it('shall validate everything when empty model set', () => {
		// Valid emails
		for (let elem in email) {
			expect(valid(email[elem], {})).toEqual(true);
		}
		// Invalid emails
		for (let elem in invalidEmail) {
			expect(valid(invalidEmail[elem], {})).toEqual(true);
		}
	});

	describe('Just validate emails (boolean)', () => {
		describe('shall validate valid emails', () => {
			for (let elem in email) {
				it('as is ' + email[elem], () => {
					expect(valid(email[elem], modelBool)).toEqual(true);
				});
			}
		});

		describe('shall not validate invalid emails', () => {
			for (let elem in invalidEmail) {
				it('as is ' + invalidEmail[elem], () => {
					expect(valid(invalidEmail[elem], modelBool)).toEqual(false);
				});
			}
		});
	});

	describe('Validate email single domain (string)', () => {
		describe('shall validate valid emails with valid domain', () => {
			for (let elem in email) {
				if (elem === 'gmail') {
					it('as is ' + email[elem], () => {
						expect(valid(email[elem], modelStr)).toEqual(true);
					});
				} else {
					it('as is ' + email[elem], () => {
						expect(valid(email[elem], modelStr)).toEqual(false);
					});
				}
			}
		});

		describe('shall not validate invalid emails', () => {
			for (let elem in invalidEmail) {
				it('as is ' + invalidEmail[elem], () => {
					expect(valid(invalidEmail[elem], modelStr)).toEqual(false);
				});
			}
		});
	});

	describe('Validate email multiple domain (array)', () => {
		describe('shall validate valid emails with valid domains', () => {
			for (let elem in email) {
				if (elem === 'gmail' || elem === 'google') {
					it('as is ' + email[elem], () => {
						expect(valid(email[elem], modelArr)).toEqual(true);
					});
				} else {
					it('as is ' + email[elem], () => {
						expect(valid(email[elem], modelArr)).toEqual(false);
					});
				}
			}
		});

		describe('shall not validate invalid emails', () => {
			for (let elem in invalidEmail) {
				it('as is ' + invalidEmail[elem], () => {
					expect(valid(invalidEmail[elem], modelArr)).toEqual(false);
				});
			}
		});
	});

});