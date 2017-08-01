const fs = require('fs');
const tasks = require('../tasks.json');

module.exports = function (arg) {
	try {
		tasks.push({
			task: arg,
			completion: false
		})
		const content = JSON.stringify(tasks);
		const write = fs.writeFileSync('./tasks.json', content);
		console.log('Added ' + arg + ' to your to-do-list');
	} catch (error) {
		console.error(error.message);
	}
}
