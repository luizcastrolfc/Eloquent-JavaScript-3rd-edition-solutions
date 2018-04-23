// 06.4 Borrowing a method
let map = {one: true, two: true, hasOwnProperty: true};

// Fix this call
console.log(Object.prototype.hasOwnProperty.call(map, 'one'));
// → true
console.log(Object.prototype.hasOwnProperty.call(map, 'three'));
// → false