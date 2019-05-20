require('./lib/string-extended');

// HAS VOWELS METHOD
console.log('This tests the hasVowels method with a string that has vowels.');
console.log('David is a hardcore chairman.'); 
console.log('David is a hardcore chairman.'.hasVowels()); 

console.log('This tests the hasVowels method with a string that does NOT have vowels.');
console.log('Why my shy rhythms fly dryly.'); 
console.log('Why my shy rhythms fly dryly.'.hasVowels()); 

// TO UPPER METHOD
console.log('This tests the toUpper method with a string that is all in lower case.');
console.log('austin is a hardcore chairman.'); 
console.log('austin is a hardcore chairman.'.toUpper()); 

// TO LOWER METHOD
console.log('This tests the toUpper method with a string that is all in lower case.');
console.log('KINGSLEY IS A HARDCORE CHAIRMAN.'); 
console.log('KINGSLEY IS A HARDCORE CHAIRMAN.'.toLower()); 

// UPPER CASE FIRST METHOD
console.log('This tests the ucFirst method with a string that is all in lower case.');
console.log('chika is a hardcore chairman.'); 
console.log('chika is a hardcore chairman.'.ucFirst()); 

// IS QUESTION METHOD
console.log('This tests the isQuestion method with a string that is a question.');
console.log('Is Austin a hardcore chairman?.'); 
console.log('Is Austin a hardcore chairman?'.isQuestion()); 

console.log('This tests the isQuestion method with a string that is NOT a question.');
console.log('Austin is a hardcore chairman.'); 
console.log('Austin is a hardcore chairman.'.isQuestion()); 

console.log('This tests the isQuestion method with a string that is NOT a valid question.');
console.log('?'); 
console.log('?'.isQuestion()); 

// WORDS METHOD
console.log('This tests the words method with a string.');
console.log('Chika is a hardcore founder of over 5 companies.'); 
console.log('Chika is a hardcore founder of over 5 companies.'.words()); 

console.log('This tests the words method with an empty string.');
console.log(''); 
console.log(''.words()); 

console.log('This tests the words method with a string that has no words.');
console.log('           '); 
console.log('           '.words()); 

// WORD COUNT METHOD
console.log('This tests the wordCount method with a normal string.');
console.log('Kingsley is a hardcore coder with over 5 years of experience.'); 
console.log('Kingsley is a hardcore coder with over 5 years of experience.'.wordCount()); 

console.log('This tests the words method with an empty string.');
console.log(''); 
console.log(''.wordCount()); 

console.log('This tests the words method with a string that has no words.');
console.log('           '); 
console.log('           '.wordCount()); 

// TO CURRENCY METHOD
console.log('This tests the toCurrency method with a decimal number.');
console.log('1234567.89'); 
console.log('1234567.89'.toCurrency()); 

// FROM CURRENCY METHOD
console.log('This tests the fromCurrency method with a currency number.');
console.log('1,234,567.89'); 
console.log('1,234,567.89'.fromCurrency()); 

// INVERSE CASE METHOD
console.log('This tests the inverseCase method with a normal string.');
console.log('Chief Dr. Ben Johnson Esq.'); 
console.log('Chief Dr. Ben Johnson Esq.'.inverseCase()); 

// ALTERNATING CASE METHOD
console.log('This tests the alternatingCase method with a normal string.');
console.log('Chief Dr. Ben Johnson Esq.'); 
console.log('Chief Dr. Ben Johnson Esq.'.alternatingCase()); 

// NUMBER WORDS METHOD
console.log('This tests the numberWords method with a normal string.');
console.log('1835204976'); 
console.log('1835204976'.numberWords()); 

// IS DIGIT METHOD
console.log('This tests the isDigit method with a number that is not a digit.');
console.log('1835204976'); 
console.log('1835204976'.isDigit()); 

console.log('This tests the isDigit method with a number that is a digit.');
console.log(''); 
console.log(''.isDigit()); 

console.log('This tests the isDigit method with a number that is a digit.');
console.log('Chief Dr. Ben Johnson Esq.'); 
console.log('Chief Dr. Ben Johnson Esq.'.isDigit()); 

console.log('This tests the isDigit method with a number that is a digit.');
console.log('1'); 
console.log('1'.isDigit()); 
