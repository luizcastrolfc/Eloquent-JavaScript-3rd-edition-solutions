// 05.1 Flattening

let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
	console.log(arrays.reduce((a, b) => a.concat(b)))
// → [1, 2, 3, 4, 5, 6]