String.prototype.hasVowels = function() {
	return /[aeiou]/.test(this);
};

String.prototype.toUpper = function() {
	return this.replace(/([a-z])/g, function(char) {
		return String.fromCharCode(char.charCodeAt() - 32);
	});
};
