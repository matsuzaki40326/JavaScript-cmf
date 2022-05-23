const obj = {
  first_name: 'ai',
  last_name: 'yosikawa',
  printFullName: function() {
    console.log(this.first_name + this.last_name);
  }
}

console.log(obj.first_name);
obj.printFullName();

class MyObj {
  constructor() {
    this.first_name = 'ai';
    this.last_name = 'yosikawa';
  }
  printFullName() {
    console.log(this.first_name + this.last_name);
  }
}

const obj2 = new MyObj;

obj2.printFullName();

