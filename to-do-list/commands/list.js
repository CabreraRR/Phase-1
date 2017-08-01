const fs = require('fs');
const read = fs.readFileSync('./tasks.json', 'utf8');
const tasks = require('../tasks.json');

let numTasks = Object.keys(tasks).length;

if (!String.prototype.padEnd) {
	String.prototype.padEnd = function padEnd(targetLength, padString) {
		targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
		padString = String(padString || ' ');
		if (this.length > targetLength) {
			return String(this);
		} else {
			targetLength = targetLength - this.length;
			if (targetLength > padString.length) {
				padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
			}
			return String(this) + padString.slice(0, targetLength);
		}
	};
}

const printData = (task) => {
	tasks.forEach((tasks, i) => {
		let c1 = '| ' + (i + 1);
		let c2 = '| ' + tasks.task;
		console.log(c1.padEnd(5) + c2.padEnd(30) + '|');
	});
};

module.exports = function print(tasks) {
	try {
		console.log('+----+-----------------------------+');
		console.log('| ID | Description                 |');
		console.log('+----+-----------------------------+');
		printData(tasks);
		console.log('+----+-----------------------------+');
		console.log('you have ' + numTasks + ' tasks');
	} catch (error) {
		console.error(error.message)
	}
};
