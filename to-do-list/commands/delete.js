const fs = require('fs');
const tasks = require('../tasks.json');

module.exports = function (arg) {
	try {
		tasks.splice((arg - 1), 1);
		const content = JSON.stringify(tasks);
		const write = fs.writeFileSync('./tasks.json', content);
		console.log('Task ' + arg + ' has been deleted');
	} catch (error) {
		console.error(error.message);
	}
}
