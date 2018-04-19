// 05.2 Your Own Loop

const loop = (start, condition, update, f) => {
	for(let i = start; condition(i); i = update(i))
  		f(i);
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1