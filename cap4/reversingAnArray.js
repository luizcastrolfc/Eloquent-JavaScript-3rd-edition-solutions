// 04.2 Reversing an array.

const reverseArray = (arr) => {
  const newArr = [];
  let i;
for(i = 0; i < arr.length; i++)
  newArr.unshift(arr[i]);
  return newArr;
}

const reverseArrayInPlace = (arr) => {
let holder, i;
  for(i = 0; i < Math.floor(arr.length/2); i++) {
    holder = arr[i]
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = holder;
  }
}
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]