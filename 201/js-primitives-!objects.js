(function testNumber() {
  //Numbers are primitives and not objects 

  //Because the num can not have its own properties?
  var l = 1;

  //What is isObject?

  l.isObject = false;
  console.log('Is number from literal an object?',

  //What literal are you referring to?

    l.hasOwnProperty('isObject'));

  //Why is the isObject in a string quotes?

  var f = Number('1');
  //Creates a new Number f == '1'
  f.isObject = false;
  //f.isObject gets 0
  console.log('Is number from function an object?',
    f.hasOwnProperty('isObject'));

  var c = new Number(1);
  c.isObject = true;
  //So does the above do anything? 
  
  //I was able to get the above two
  //to show true by adding the "new"
  console.log('Is number from constructor an object?',
    c.hasOwnProperty('isObject'));
})();

(function testBoolean() {
  var l = true;
  l.isObject = false;
  console.log('Is boolean from literal an object?',
    l.hasOwnProperty('isObject'));

  var f = Boolean('1');
  f.isObject = false;
  console.log('Is boolean from function an object?',
    f.hasOwnProperty('isObject'));

  var c = new Boolean(true);
  c.isObject = true;
  console.log('Is boolean from constructor an object?',
    c.hasOwnProperty('isObject'));
})();

(function testString() {
  var l = 'test';
  l.isObject = false;
  console.log('Is string from literal an object?',
    l.hasOwnProperty('isObject'));

  var f = String(1);
  f.isObject = false;
  console.log('Is string from function an object?',
    f.hasOwnProperty('isObject'));

  var c = new String(1);
  c.isObject = true;
  console.log('Is string from constructor an object?',
    c.hasOwnProperty('isObject'));
})();

