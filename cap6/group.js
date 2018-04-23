// 06.2 Groups
class Group {
  constructor() {
	this.items = [];
  }
  
  has(item) {
    return this.items.includes(item);
  };
  
  add(item) {
    if(!this.has(item))
      this.items.push(item);
  };
  
  delete(item) {
  	this.items = this.items.map(value => value !== item);
  };
  
  static from(arr) {
    const group = new Group();
    for (const item of arr)
      group.add(item)
  	return group;
  };
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false