const hello = function hello(name, age) {
  console.log('hello ' + name + age);
  return name + age;
}

const returnValue = hello('john', 19);
console.log(returnValue);
