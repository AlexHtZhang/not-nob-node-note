console.log('Starting app.js');

// module dependency
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

// module created
const notes = require('./notes.js');

const argv = yargs.argv;// yargs is used to parse the input commend, it can automatically get the commend line input.
var command = argv._[0];// yargs { _: [ 'remove' ], title: 'secret', '$0': 'app.js' }
console.log('yargs', argv);

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log('Note created');
		notes.logNote(note);
	} else {
		console.log(`Note title taken`);
	}
} else if (command === 'list') {
	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s).`);
	allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
	var note = notes.getNote(argv.title);
	if (note) {
		console.log('Note found');
		notes.logNote(note);
	} else {
		console.log('Note not found');
	}
} else if (command === 'remove') {
	var noteRemoved = notes.removeNote(argv.tilte);
	var message = noteRemoved ? 'Note was removed' : 'Note not found'
	console.log(message);
} else {
	console.log('command not recognized');
};





