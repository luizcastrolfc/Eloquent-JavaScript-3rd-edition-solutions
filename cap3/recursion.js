const isEven = (a) => {
	if (a < 0)
		return a
	if (a === 0)
		return true
	if (a === 1)
		return false
	
	return isEven(a-2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??