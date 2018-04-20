const every = (array, test) => {
  for (let item of array)
    if(!test(item))
      return false;
  return true;
}

const everyWithSome = (array, test) => {
  return !array.some(item => !test(item)); 
}

console.log(everyWithSome([1, 3, 5], n => n < 10));
// → true
console.log(everyWithSome([2, 4, 16], n => n < 10));
// → false
console.log(everyWithSome([], n => n < 10));
// → true

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true