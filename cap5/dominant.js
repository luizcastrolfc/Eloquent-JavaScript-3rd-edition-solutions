// 05.4 Dominant Writing Direction

const dominantDirection = (text) => {
  const getDirection = char => {
    const script = characterScript(char.codePointAt(0));
    return script ? script.direction : null;
  }
  const count = countBy(text, char => getDirection(char))
  .filter(({name}) => name != null);

  return count.reduce((a, b) => a.count > b.count ? a : b).name;
}

console.log(dominantDirection("Hello!مساء الخير"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl