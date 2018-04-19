// 04.4 Deep Comparison

const deepEqual = (a, b) => {
  const isObj = (obj) => typeof obj === "object";
  const isNull = (...obj) => {
    for(let item in obj)
    	if(item === null) return true;
    return false
  }
  
  if (a === b) return true;
  
  if ( isNull(a, b) || !isObj(a) || !isObj(b))
    return false;

  const keysA = Object.keys(a),
        keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true