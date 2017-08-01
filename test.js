const fs = require('fs');
const command = process.argv[2];
const stuff = process.argv[3];
const tasks = require('./tasks.json');

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

console.log('To-Do-List');

switch (command) {
	case 'list':
		const read = fs.readFileSync('./tasks.json', 'utf8');

		let numTasks = Object.keys(tasks).length;

		console.log('+----+-----------------------------+');
		console.log('| ID | Description                 |');
		console.log('+----+-----------------------------+');

		const print = (id, task) => {
			tasks.forEach(tasks => {
				let c1 = '| ' + tasks.id;
				let c2 = '| ' + tasks.task;
				console.log(c1.padEnd(5) + c2.padEnd(30) + '|');
			});
		};

		console.log('+----+-----------------------------+');

		print(tasks);

		console.log('you have ' + numTasks + ' tasks');

		break;
	case 'add':
		const write = fs.writeFileSync('./tasks.json')
		break;
	case 'complete':
		break;
	case 'delete':
		break;
};
