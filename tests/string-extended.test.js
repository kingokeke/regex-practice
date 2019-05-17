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

	it('should return true for a string that is a question', function() {
		expect('Is Annabel here?'.isQuestion()).toBe(true);
	});
});

// TESTS WORDS METHOD ON THE STRING PROTOTYPE
describe('String.prototype.words', function() {
	it('should exist on the String prototype', function() {
		expect('A random string').toHaveProperty('words');
	});

	it('should not return a response that is undefined', function() {
		expect('A random string'.words()).not.toBeUndefined();
	});

	it('should return an array', function() {
		expect(Array.isArray('What a time to be alive'.words())).toBe(true);
	});

	it('should return all the words in a string as elements of an array', function() {
		expect('Annabel is here.'.words()).toEqual(['Annabel', 'is', 'here']);
	});
});

// TESTS WORDCOUNT METHOD ON THE STRING PROTOTYPE
describe('String.prototype.wordCount', function() {
	it('should exist on the String prototype', function() {
		expect('A random string').toHaveProperty('wordCount');
	});

	it('should not return a response that is undefined', function() {
		expect('A random string'.wordCount()).not.toBeUndefined();
	});

	it('should return a number', function() {
		expect(typeof 'What a time to be alive'.wordCount()).toBe('number');
	});

	it('should return the number of words in a string', function() {
		expect('What a time to be alive.'.wordCount()).toBe(6);
	});

	it('should return 0 for an empty string', function() {
		expect(''.wordCount()).toBe(0);
	});
});

// TESTS TOCURRENCY METHOD ON THE STRING PROTOTYPE
describe('String.prototype.toCurrency', function() {
	it('should exist on the String prototype', function() {
		expect('1111111.11').toHaveProperty('toCurrency');
	});

	it('should not return a response that is undefined', function() {
		expect('1111111.11'.toCurrency()).not.toBeUndefined();
	});

	it('should return a string', function() {
		expect(typeof '1111111.11'.toCurrency()).toBe('string');
	});

	it('should return a number in currency format', function() {
		expect('1111111.11'.toCurrency()).toBe('1,111,111.11');
	});
});

// TESTS FROMCURRENCY METHOD ON THE STRING PROTOTYPE
describe('String.prototype.fromCurrency', function() {
	it('should exist on the String prototype', function() {
		expect('1,111,111.11').toHaveProperty('fromCurrency');
	});

	it('should not return a response that is undefined', function() {
		expect('1,111,111.11'.fromCurrency()).not.toBeUndefined();
	});

	it('should return a string', function() {
		expect(typeof '1,111,111.11'.fromCurrency()).toBe('string');
	});

	it('should return a number in normal number format, without commas', function() {
		expect('1,111,111.11'.toCurrency()).toBe('1111111.11');
	});
});

// TESTS INVERSECASE METHOD ON THE STRING PROTOTYPE
describe('String.prototype.inverseCase', function() {
	it('should exist on the String prototype', function() {
		expect('A random string').toHaveProperty('inverseCase');
	});

	it('should not return a response that is undefined', function() {
		expect('A random string'.inverseCase()).not.toBeUndefined();
	});

	it('should return a string', function() {
		expect(typeof 'What a time to be alive'.inverseCase()).toBe('string');
	});

	it('should return inverted characters of a string', function() {
		expect('Mr. Ben'.inverseCase()).toBe('mR. bEN');
	});
});

// TESTS ALTERNATINGCASE METHOD ON THE STRING PROTOTYPE
describe('String.prototype.alternatingCase', function() {
	it('should exist on the String prototype', function() {
		expect('A random string').toHaveProperty('alternatingCase');
	});

	it('should not return a response that is undefined', function() {
		expect('A random string'.alternatingCase()).not.toBeUndefined();
	});

	it('should return a string', function() {
		expect(typeof 'Onomatopoeia'.alternatingCase()).toBe('string');
	});

	it('should return characters of a string in alternating case, starting with a small letter', function() {
		expect('Onomatopoeia'.alternatingCase()).toBe('oNoMaToPoEiA');
	});
});

// TESTS NUMBERWORDS METHOD ON THE STRING PROTOTYPE
describe('String.prototype.numberWords', function() {
	it('should exist on the String prototype', function() {
		expect('325').toHaveProperty('numberWords');
	});

	it('should not return a response that is undefined', function() {
		expect('325'.numberWords()).not.toBeUndefined();
	});

	it('should return a string', function() {
		expect(typeof '325'.numberWords()).toBe('string');
	});

	it('should return the number in words instead of numerals', function() {
		expect('325'.numberWords()).toBe('three two five');
	});
});

// TESTS ISDIGIT METHOD ON THE STRING PROTOTYPE
describe('String.prototype.isDigit', function() {
	it('should exist on the String prototype', function() {
		expect('3').toHaveProperty('isDigit');
	});

	it('should not return a response that is undefined', function() {
		expect('3'.isDigit()).not.toBeUndefined();
	});

	it('should return a boolean response', function() {
		expect(typeof '3'.isDigit()).toBe('boolean');
	});

	it('should return false for a non-digit number', function() {
		expect('325'.isDigit()).toBe(false);
	});

	it('should return false for an empty string', function() {
		expect(''.isDigit()).toBe(false);
	});

	it('should return true for a digit number', function() {
		expect('3'.isDigit()).toBe(true);
	});
});
