// 04.1 The sum of range
const range = (start, end, step = start > end ? -1 : 1) => {
	let i;
  	const result = [];
  	if(step < 0){
    	for(i = start; i >= end; i += step){
        	result.push(i);
        }
    }
    else {
    	for(i = start; i <= end; i += step){
        	result.push(i);
        }
    }
  	return result;
}

const sum = (range) => {
	let result = 0, i;
  	for( i = 0; i < range.length; i++)
      result += range[i];
  	return result;
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55