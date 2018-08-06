console.log('Starting app.js');

// module dependency
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

// module created
const notes = require('./notes.js');

const argv = yargs.argv;// yargs is used to parse the input commend, it can automatically get the commend line input.
var command = argv._[0];// 
console.log('yargs', argv);

if (command === 'add') {
	notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
	notes.getAll();
} else if (command === 'read') {
	notes.getNote(argv.title);
} else if (command === 'remove') {
	notes.removeNote(argv.title)
} else {
	console.log('command not recognized');
};





