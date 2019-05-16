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
});
