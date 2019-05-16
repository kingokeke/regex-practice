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
	return 'something';
};
