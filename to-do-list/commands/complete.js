const fs = require('fs');
const tasks = require('../tasks.json');

module.exports = function (arg) {
	try {
		tasks[(arg - 1)].completion = true;
		const content = JSON.stringify(tasks);
		const write = fs.writeFileSync('./tasks.json', content);
		console.log('Completed Task ' + arg + ', ' + tasks[(arg - 1)].task);
	} catch (error) {
		console.error(error.message);
	}
};
