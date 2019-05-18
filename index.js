require('./lib/string-extended');

// HAS VOWELS METHOD
console.log('This tests the hasVowels method with a string that has vowels.');
console.log('David is a hardcore chairman.'); // Reference string
console.log('David is a hardcore chairman.'.hasVowels()); // Converted string

console.log('This tests the hasVowels method with a string that does NOT have vowels.');
console.log('Why my shy rhythms fly dryly.'); // Reference string
console.log('Why my shy rhythms fly dryly.'.hasVowels()); // Converted string

// TO UPPER METHOD
console.log('This tests the toUpper method with a string that is all in lower case.');
console.log('austin is a hardcore chairman.'); // Reference string
console.log('austin is a hardcore chairman.'.toUpper()); // Converted string

// TO LOWER METHOD
console.log('This tests the toUpper method with a string that is all in lower case.');
console.log('KINGSLEY IS A HARDCORE CHAIRMAN.'); // Reference string
console.log('KINGSLEY IS A HARDCORE CHAIRMAN.'.toLower()); // Converted string

// UPPER CASE FIRST METHOD
console.log('This tests the ucFirst method with a string that is all in lower case.');
console.log('chika is a hardcore chairman.'); // Reference string
console.log('chika is a hardcore chairman.'.ucFirst()); // Converted string

// IS QUESTION METHOD
console.log('This tests the isQuestion method with a string that is a question.');
console.log('Is Austin a hardcore chairman?.'); // Reference string
console.log('Is Austin a hardcore chairman?'.isQuestion()); // Converted string

console.log('This tests the isQuestion method with a string that is NOT a question.');
console.log('Austin is a hardcore chairman.'); // Reference string
console.log('Austin is a hardcore chairman.'.isQuestion()); // Converted string

console.log('This tests the isQuestion method with a string that is NOT a valid question.');
console.log('?'); // Reference string
console.log('?'.isQuestion()); // Converted string

// WORDS METHOD
console.log('This tests the words method with a string.');
console.log('Chika is a hardcore founder of over 5 companies.'); // Reference string
console.log('Chika is a hardcore founder of over 5 companies.'.words()); // Converted string

console.log('This tests the words method with an empty string.');
console.log(''); // Reference string
console.log(''.words()); // Converted string

console.log('This tests the words method with a string that has no words.');
console.log('           '); // Reference string
console.log('           '.words()); // Converted string

// WORD COUNT METHOD
console.log('This tests the wordCount method with a normal string.');
console.log('Kingsley is a hardcore coder with over 5 years of experience.'); // Reference string
console.log('Kingsley is a hardcore coder with over 5 years of experience.'.wordCount()); // Converted string

console.log('This tests the words method with an empty string.');
console.log(''); // Reference string
console.log(''.wordCount()); // Converted string

console.log('This tests the words method with a string that has no words.');
console.log('           '); // Reference string
console.log('           '.wordCount()); // Converted string

// TO CURRENCY METHOD
console.log('This tests the toCurrency method with a decimal number.');
console.log('1234567.89'); // Reference string
console.log('1234567.89'.toCurrency()); // Converted string

// FROM CURRENCY METHOD
console.log('This tests the fromCurrency method with a currency number.');
console.log('1,234,567.89'); // Reference string
console.log('1,234,567.89'.fromCurrency()); // Converted string

// INVERSE CASE METHOD
console.log('This tests the inverseCase method with a normal string.');
console.log('Chief Dr. Ben Johnson Esq.'); // Reference string
console.log('Chief Dr. Ben Johnson Esq.'.inverseCase()); // Converted string

// ALTERNATING CASE METHOD
console.log('This tests the alternatingCase method with a normal string.');
console.log('Chief Dr. Ben Johnson Esq.'); // Reference string
console.log('Chief Dr. Ben Johnson Esq.'.alternatingCase()); // Converted string

// NUMBER WORDS METHOD
console.log('This tests the numberWords method with a normal string.');
console.log('1835204976'); // Reference string
console.log('1835204976'.numberWords()); // Converted string

// IS DIGIT METHOD
console.log('This tests the isDigit method with a number that is not a digit.');
console.log('1835204976'); // Reference string
console.log('1835204976'.isDigit()); // Converted string

console.log('This tests the isDigit method with a number that is a digit.');
console.log(''); // Reference string
console.log(''.isDigit()); // Converted string

console.log('This tests the isDigit method with a number that is a digit.');
console.log('Chief Dr. Ben Johnson Esq.'); // Reference string
console.log('Chief Dr. Ben Johnson Esq.'.isDigit()); // Converted string

console.log('This tests the isDigit method with a number that is a digit.');
console.log('1'); // Reference string
console.log('1'.isDigit()); // Converted string
