/* eslint-disable no-extend-native, max-len, prefer-arrow-callback, func-names */

// HASVOWELS METHOD
String.prototype.hasVowels = function hasVowels() {
  // The regex pattern matches the first vowel in the string, and
  // then returns true when a vowel is found and false otherwise.
  // Returns a boolean.
  return /[aeiou]/.test(this);
};

// TOUPPER METHOD
String.prototype.toUpper = function toUpper() {
  // The regex pattern matches all lowercase characters in the string,
  // then replaces them with the uppercase version of those characters
  // Returns a string with all characters in uppercase.
  return this.replace(/([a-z])/g, function (char) {
    return String.fromCharCode(char.charCodeAt() - 32);
  });
};

// TOLOWER METHOD
String.prototype.toLower = function toLower() {
  // The regex pattern matches all uppercase characters in the string,
  // then replaces them with the lowercase version of those characters
  // Returns a string with all characters in lowercase.
  return this.replace(/([A-Z])/g, function (char) {
    return String.fromCharCode(char.charCodeAt() + 32);
  });
};

// UCFIRST METHOD
String.prototype.ucFirst = function ucFirst() {
  // The regex pattern matches alphabet character in the string,
  // then replaces it with the uppercase version of that characters
  // Returns a string with the first character in uppercase.
  const firstLetter = this.match(/^[a-zA-Z]/);
  return firstLetter[0].toUpper() + this.substring(1);
};

// ISQUESTION METHOD
String.prototype.isQuestion = function isQuestion() {
  // The regex pattern matches a question mark at the end of the string,
  // but does not match a question mark as the only character in the string.
  // Returns a boolean.
  return /.\?$/g.test(this);
};

// WORDS METHOD
String.prototype.words = function words() {
  // The regex pattern matches all character groups in the string that
  // are bounded by non-word characters, and puts them in an array.
  // Returns an array of all the words that make up that string.
  return this.match(/\b\w+\b/g) || [];
};

// WORDCOUNT METHOD
String.prototype.wordCount = function wordCount() {
  // The method invokes the words method defined above on the string
  // and then counts the number of elements in the resulting array.
  // Returns an integer number.
  return this.words().length || 0;
};

// TOCURRENCY METHOD
String.prototype.toCurrency = function toCurrency() {
  // The regex pattern matches all digits in the string that have a
  // group of 3 digits after them in a captured lookahead, captures
  // the digit and then replaces it with a digit + comma version.
  // Returns a string of the number without commas
  return this.replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

// FROM CURRENCY METHOD
String.prototype.fromCurrency = function fromCurrency() {
  // The regex pattern matches all commas in the string and then
  // replaces them with nothing (essentially removing them)
  // Returns a string of the number without commas
  return this.replace(/[,]/g, '');
};

// INVERSECASE METHOD
String.prototype.inverseCase = function inverseCase() {
  // The regex pattern matches all characters in the string and then checks to see
  // if the character is uppercase (which is converted to lowercase) or lowercase
  // (which is converted to uppercase). Other characters are returned as-is.
  // Returns a string with inverted case characters
  return this.replace(/./g, (char) => {
    if (/[a-z]/g.test(char)) return char.toUpper();
    if (/[A-Z]/g.test(char)) return char.toLower();
    return char;
  });
};

// ALTERNATINGCASE METHOD
String.prototype.alternatingCase = function alternatingCase() {
  // The regex pattern matches all characters in the string and then alternates
  // the case of characters in the string, always starting the string with lowercase
  // Returns a string with alternating case characters
  const stringCharacters = this.match(/./g);
  for (let index = 0; index < stringCharacters.length; index += 1) {
    stringCharacters[index] = index % 2 ? stringCharacters[index].toUpper() : stringCharacters[index].toLower();
  }
  return stringCharacters.join('');
};

// NUMBERWORDS METHOD
String.prototype.numberWords = function numberWords() {
  // The regex pattern matches all digits in the string and then
  // replaces each digit numeral with its corresponding word version
  // and a space. The trailing space is removed using trim() method.
  // Returns a string of the numeral number in words format
  return this.replace(/\d/g, function (char) {
    const digitsInWords = [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
    ];
    return `${digitsInWords[Number(char)]} `;
  }).trim();
};

// ISDIGIT METHOD
String.prototype.isDigit = function isDigit() {
  // The regex pattern matches a single digit in the string that is
  // both at the start and the end of the string. Evaluates to true
  // when the string ia a single digit and false when it is not.
  // Returns a boolean
  return /^\d{1}$/.test(this);
};
