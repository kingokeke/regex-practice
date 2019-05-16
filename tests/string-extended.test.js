/* eslint-disable no-undef */

// IMPORT REQUIRED LIBRARIES
require('../lib/string-extended');

// TESTS HASVOWELS METHOD ON THE STRING PROTOTYPE
describe('String.prototype.hasVowels', function() {
	it('should exist on the String prototype', function() {
		expect('Ome random string').toHaveProperty('hasVowels');
	});

	it('should not return a response that is undefined', function() {
		expect('A random string'.hasVowels()).not.toBeUndefined();
	});

	it('should return a boolean', function() {
		expect(typeof 'stringify'.hasVowels()).toBe('boolean');
	});

	it('should return false when the method is called on a string that does not have vowels', function() {
		expect('fly rhythms'.hasVowels()).toBeFalsy();
	});

	it('should return true when the method is called on a string that has vowels', function() {
		expect('master plan'.hasVowels()).toBeTruthy();
	});
});

// TESTS TOUPPER METHOD ON THE STRING PROTOTYPE
describe('String.prototype.toUpper', function() {
	it('should exist on the String prototype', function() {
		expect('Ome random string').toHaveProperty('toUpper');
	});

	it('should not return a response that is undefined', function() {
		expect('A random string'.toUpper()).not.toBeUndefined();
	});

	it('should return a string', function() {
		expect(typeof 'stringify'.toUpper()).toBe('string');
	});

	it('should return an upper case string', function() {
		expect('annabel is here'.toUpper()).toBe('ANNABEL IS HERE');
	});
});

// TESTS TOLOWER METHOD ON THE STRING PROTOTYPE
describe('String.prototype.toLower', function() {
	it('should exist on the String prototype', function() {
		expect('Ome random string').toHaveProperty('toLower');
	});

	it('should not return a response that is undefined', function() {
		expect('A random string'.toLower()).not.toBeUndefined();
	});

	it('should return a string', function() {
		expect(typeof 'stringify'.toLower()).toBe('string');
	});

	it('should return a lower case string', function() {
		expect('ANNABEL IS HERE'.toLower()).toBe('annabel is here');
	});
});

// TESTS UCFIRST METHOD ON THE STRING PROTOTYPE
describe('String.prototype.ucFirst', function() {
	it('should exist on the String prototype', function() {
		expect('A random string').toHaveProperty('ucFirst');
	});

	it('should not return a response that is undefined', function() {
		expect('a random string'.ucFirst()).not.toBeUndefined();
	});

	it('should return a string', function() {
		expect(typeof 'a random string'.ucFirst()).toBe('string');
	});

	it('should return a string with the first letter capitalized', function() {
		expect('another random string'.ucFirst()).toBe('Another random string');
	});
});

// TESTS ISQUESTION METHOD ON THE STRING PROTOTYPE
describe('String.prototype.isQuestion', function() {
	it('should exist on the String prototype', function() {
		expect('Ome random string').toHaveProperty('isQuestion');
	});

	it('should not return a response that is undefined', function() {
		expect('A random string'.isQuestion()).not.toBeUndefined();
	});

	it('should return a boolean', function() {
		expect(typeof 'stringify'.isQuestion()).toBe('boolean');
	});

	it('should return false for a string that is not a question', function() {
		expect('Annabel is here.'.isQuestion()).toBe(false);
	});

	it('should return false for a string that contains only a question mark', function() {
		expect('?'.isQuestion()).toBe(false);
	});
});
