String.prototype.hasVowels = function() {
	return /[aeiou]/.test(this);
};

String.prototype.toUpper = function() {
	return this.replace(/([a-z])/g, function(char) {
		return String.fromCharCode(char.charCodeAt() - 32);
	});
};

String.prototype.toLower = function() {
	return this.replace(/([A-Z])/g, function(char) {
		return String.fromCharCode(char.charCodeAt() + 32);
	});
};

String.prototype.ucFirst = function() {
	var firstLetter = this.match(/^[a-zA-Z]/);
	return firstLetter[0].toUpper() + this.substring(1);
};

String.prototype.isQuestion = function() {
	return /.\?$/g.test(this);
};

String.prototype.words = function() {
	return this.match(/\b\w+\b/g);
};

String.prototype.wordCount = function() {
	return this.words() ? this.words().length : 0;
};

String.prototype.toCurrency = function() {
	return 'something';
};

String.prototype.inverseCase = function() {
	return this.replace(/./g, function(char) {
		if (/[a-z]/g.test(char)) return char.toUpper();
		if (/[A-Z]/g.test(char)) return char.toLower();
		return char;
	});
};

String.prototype.alternatingCase = function() {
	var stringCharacters = this.match(/./g);
	for (var index = 0; index < stringCharacters.length; index++) {
		stringCharacters[index] = index % 2 ? stringCharacters[index].toUpper() : stringCharacters[index].toLower();
	}
	return stringCharacters.join('');
};

String.prototype.numberWords = function() {
	return 'something';
};
