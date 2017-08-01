const command = process.argv[2];
const arg = process.argv[3];
const list = require('./commands/list');
const add = require('./commands/add');
const complete = require('./commands/complete');
const deleting = require('./commands/delete');

console.log('To-Do-List');

if (command === 'list') {
	list();
};
if (command === 'add') {
	add(arg);
};
if (command === 'complete') {
	complete(arg);
};
if (command === 'delete') {
	deleting(arg);
}
