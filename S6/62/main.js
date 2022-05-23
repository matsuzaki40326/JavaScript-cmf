// function hello(callback, lastName) {
//   console.log(callback);
//   console.log('hello ' + callback(lastName));
// }


// function getName() {
//   return 'you';
// }

// const getFirstName = function (name) {
//   return 'Code' + name
// }

// hello (getFirstName, 'Mafia');


function doSomething(a, b, callback) {
  const result = callback(a ,b);
  console.log(result);
}

function multiply(a, b) {
  return a * b;
}

function plus(a, b) {
  return a + b;
}

doSomething(2,2,multiply);
doSomething(2,3,plus);
