# Foundational JavaScript Programming

In this module we're going to cover some of the basics of general programming
as well as the basics of programming in JavaScript. You might have covered some
of this before you arrived at the guild but make sure you have these skills
before moving on from this module.

## Skills

### General Programming

- [x] Can describe what a variable is
	- a variable stores data values 
- [x] Can describe the difference between a local and global variable
	- a local variable is defined in a function and cannot be used/changed outside of the local.
	- a global variable is defined outside of a function and can be used/changed within the function
- [x] Can describe a Function
	- a function is a set of statements that calculate a task or performs a task
- [x] Can describe a Hash
	- a hash is a datatype that assigns keys to values
- [x] Can describe a Array
	- an array is an object that is a list of values
- [x] Can describe a Set
	- a set is an object that contain any value
- [ ] Can describe the ! (bang) operator
	- 
- [x] Can describe an "if statement"
	- an if statements performs a task if the stement returns true
- [x] Can describe a pure vs. impure function
	- a ure function is a function that given the same input will always return the same output.
- [x] Can describe operator precedence
	- Operator precendence is the order in which operators are evaluated
- [x] Can describe the `push` Array method
	- `.push()` will add a value to the end of an array
- [x] Can describe the `pop` Array method
	- `.pop()` will removed the last value in the array
- [x] Can describe the `shift` Array method
	- `.shift` will add a value to the beginning of an array
- [x] Can describe the `unshift` Array method
	- `.unshfit` will remove the first value in an array
- [x] Can describe the `each` Array method
	- forEach will execute the call back for each element present in the array
- [x] Can describe the `map` Array method
	- `.map()` execute the callback function for each element present in the array and return an array
- [x] Can describe the `filter` Array method
	- `filter()` creates an array filled with all array elements that pass a test
- [x] Can describe the `reduce` Array method
	- `.reduce()` reduces an array to a single value, the total of all values.
- [x] Can describe a closure
	- a closure in javascript is a function that can access the parent scope, even whent he parent function has closed

### JavaScript Specific

- [x] Can write a Function in JavaScript
	- ```javascript
	var counter =0;
	function tacos(){
		counter++;
		return counter;
	};
	```
- [x] Can write an Object literal in JavaScript
	- ```javascript
	var myTaco ={
		meat: 'carne asada',
		taco: 'corn',
		cilantro: true,
		salsa: false,
	};
	```
- [x] Can write an Array literal in JavaScript
	- ```javascript
	var tacoMeats = ['carne asada', 'pollo', 'carnitas' ];
	```
- [x] Can write an String literal in JavaScript
	- ```javascript
	var favoriteTacoTruck = 'Maria's Taco Heaven';
	```
- [x] Can write an Number literal in JavaScript
	- ```javascript
	var tacosEaten = 20;
	```
- [x] Can write and `if`/`else` statement in JavaScript
	- ```javascript
	function eat(tacosLeft) {
		if (tacosLeft > 0) {
		return 'more tacos please...';
		} else {
		eatTaco();
		};
	};
	```
- [x] Can write and `switch` statement in JavaScript
	- ```javascript
	switch (taco){
		case 'carne asada':
			return ' .99 each';
			break;
		case 'carnitas':
			return ' 1.05 each';
			break;
		default:
			return 'Sorry, we do not have' + taco + '. Would you like anything else?';
	}
	```
- [x] Can write and `while` loop in JavaScript
	- ```javascript
	while (tacosEaten < 100){
		eatTaco();
	};
	```
- [x] Can write and `for` loop in JavaScript
	- ```javascript
	for (var i=0; i<=tacosEaten; i++){
		beer++;
	}
	```
- [x] Can write a pure function in JavaScript
	- ```javascript
	function getHalf(num){
		return num / 2;
	};
	```
- [x] Can set the value of a property on a JavaScript Object using `.` syntax
	- ```javascript
	taco.type = 'Carne Asada';
	```
- [x] Can set the value of a property on a JavaScript Object using `[]` syntax
	- ```javascript
	var taco = 'taco';
	object[taco] = 'carne asada';
	```
- [x] Can get the value of a property on a JavaScript Object using `.` syntax
	- ```javascript
	return object.meat 
	```
- [x] Can get the value of a property on a JavaScript Object using `[]` syntax
	- ```javascript
	return object['1'];
	```
- [x] Can describe the difference between `==` and `===` in JavaScript
	- `==` will check the value so '0' and 0 will return true
	- `===` is strict and will even check the type of value
- [x] Can describe the difference between `var`, `let`, and `const` in JavaScript
	- `const` is a constant and should not be redifined
	- `var` is used in a block scope for loops
	- `let` is used when re assigning a variable
- [x] Can use `Array#push` in JavaScript
	- ```javascript
	var meat = ['carne asada', 'carnitas', 'pollo'];
	meat.push(puerco);
	```
- [x] Can use `Array#pop` in JavaScript
	- ```javascript
	var meat = ['carne asada', 'carnitas', 'pollo', 'puerco'];
	meat.pop(puerco);
	```
- [x] Can use `Array#shift` in JavaScript
	- ```javascript
	var meat = ['carne asada', 'carnitas', 'pollo'];
	meat.push(puerco);
	```
- [x] Can use `Array#unshift` in JavaScript
	- ```javascript
	var meat = ['puerco', carne asada', 'carnitas', 'pollo'];
	meat.push(puerco);
	```
- [x] Can use `Array#forEach` in JavaScript
	- ```javascript
	meat.forEach(key >0){
	beltsize++;
	};
	```
- [x] Can use `Array#map` in JavaScript
	- ```javascript
	var num = [1, 4, 9]
	var roots = num.map(Math.sqrt)
	```
- [x] Can use `Array#filter` in JavaScript
	- ```javascript
	var ages= [12, 80, 40, 16, 2, 100, 40];
	function adultCheck(age){
		return age >=18;
	};
	return ages.filter(adultCheck);
	```
- [x] Can use `Array#reduce` in JavaScript
	- ```javascript
	var tacosDelivered = [2, 15, 7, 40, 1000000];
	function taco (){
		return total + taco;
	};
	return tacosDelivered.reduce(taco);
	```
- [x] Can declare local vs. global variables in JavaScript
	- a local variable is a variable that is defined within the function while a global variable is declared outside of all functions.
- [x] Can get all the keys on a JavaScript object
	- ```javascript
	Object.keys(obj);
	```
- [x] Can get all the values on a JavaScript object
	- ```javascript
	Object.values(obj);
	```
- [ ] Can write a closure in JavaScript
	- ```javascript
	function fullName(firstName, lastname){
		var intro = "Your name is ";
		function makeFullName(){
			return intro + firstName + lastName;
		};
		return makeFullName;
	};
	fullName("Steve", "Buscemi");
	```
- [ ] Can pass multiple objects into a function using a plain object as a single argument, in JavaScript
	- ```javascript
	
	```
- [x] Can describe lexical scope inheritance in JavaScript
	- lexical scope is when a variable is defined nested within a function and can be called upon by any function nested within that function.
- [x] Can split a string into an array in JavaScript
	- ```javascript
	var string = "this is a string";
	return string.split(" ");
	```
- [x] Can join an array into a string in JavaScript
	- ```javascript
	var arr = ['this', 'is', 'an', 'array'];
	return arr.join(" ");
	```


## Glossary of Terms

### General Programming

| Term         | Explanation |
| ------------ | ----------- |
| String       | An ordered list of text characters |
| Number       | An object type representing either an Integer or a Float |
| Object       | A data structure |
| Array        | An array is an ordered set of values that you refer to with a name and an index. |
| Hash         | A data type mapping keys to values |
| Index        | AKA Hash |
| Map          | AKA Hash |
| Function     | A code snippet that can be called by other code or by itself, or a variable that refers to the function. When a function is called, arguments are passed to the function as input, and the function can optionally return an output. A function in JavaScript is also an object. |
| Boolean      | A logical data type that can have only the values true or false |
| Conditional  | A set of rules that can interrupt normal code execution or change it, depending on whether the condition is true or not |
| Literal      | A way of declaring an object as it is literally meant to be interpreted |
| Truthy       | A value that translates to true when evaluated in a Boolean context |
| Falsy        | A value that translates to false when evaluated in a Boolean context |
| Comment      | A part of your source code that is ignored by the computed and is meant for other developers to read |
| Error        | An unindented event or outcome |
| Syntax Error | A error that is thrown when your source code is written incorrectly |

### JavaScript Specific

| Term           | Explanation |
| -------------- | ----------- |
| Number         | In JavaScript, Number is a numeric data type that can represent both an Integer and a Float |
| Object         | Almost all values in JavaScript are objects |
| ReferenceError | The error that is thrown when your code attempts to use something that was not declared |

[More](https://www.codecademy.com/articles/glossary-javascript)
[A Lot More](https://developer.mozilla.org/en-US/docs/Glossary)
[JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

## Search Terms

```
javascript split string into array
```

## Exercises

- https://www.codecademy.com/courses/getting-started-v2/0/1
- https://www.freecodecamp.com/challenges/use-conditional-logic-with-if-statements
- https://www.freecodecamp.com/challenges/iterate-with-javascript-for-loops
- https://www.freecodecamp.com/challenges/iterate-odd-numbers-with-a-for-loop
- [Freecodecamp - Basic Javascript (10 hours)](https://www.freecodecamp.com/map)
- https://www.freecodecamp.com/challenges/iterate-with-javascript-while-loops
- https://www.freecodecamp.com/challenges/iterate-with-javascript-for-loops
- https://www.freecodecamp.com/challenges/declare-javascript-variables
- https://www.freecodecamp.com/challenges/iterate-over-arrays-with-map
- https://www.freecodecamp.com/challenges/filter-arrays-with-filter
- https://www.freecodecamp.com/challenges/condense-arrays-with-reduce
- https://www.freecodecamp.com/challenges/split-strings-with-split
- https://www.freecodecamp.com/challenges/join-strings-with-join
- https://github.com/workshopper/javascripting



## Resources

- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors
- http://javascriptissexy.com/javascript-objects-in-detail/
- https://medium.com/@prufrock123/js-dot-notation-vs-bracket-notation-797c4e34f01d
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
- https://www.w3schools.com/jsref/jsref_obj_array.asp
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype?v=example
- https://auth0.com/blog/glossary-of-modern-javascript-concepts/#purity
- https://medium.com/@zfrisch/destroying-buildings-a-simple-guide-to-javascript-closures-ef9fc326c73d