// 06.2 Group Iterator
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
    for (let item of arr)
      group.add(item)
  	return group;
  };
  
  [Symbol.iterator]() { return new GroupIterator(this);  };
}

class GroupIterator {
	constructor(group){
    	this.group = group;
      	this.index = 0;
    }
  
  	next() {
    	
      if(this.index >= this.group.items.length)
        return { value: undefined, done: true };
      const obj = { value: this.group.items[this.index], done: false };
      this.index++;
      return obj;
    }
}


for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c