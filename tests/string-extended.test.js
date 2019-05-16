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
});
