console.log('starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
	var notes = [];
	var note = {
		title,
		body
	};

	try {
	  	var notesString = fs.readFileSync('notes-data.json');
		notes = JSON.parse(notesString);
	} catch (e) {
		// don't have to wirte anythig here. the error will be catched and the file will be created.
	}

	// arror function no need for return. it will auto return the expresion.
	var duplicateNotes = notes.filter((note) => note.title === title);
	// note.title is the title of all notes in the notes one by one.
	// filter method return an array of elements survive the callback function.
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

	if (duplicateNotes.length === 0) {
		notes.push(note);
		fs.writeFileSync('notes-data.json', JSON.stringify(notes));
	}

};

var getAll = () => {
	console.log('Getting all notes')
}

var getNote = (title) => {
	console.log('Getting node', title)
}

var removeNote = (title) => {
	console.log('Removing note', title)
}

module.exports = {
	addNote, //ES6 sytax suger same as addNote: addNote
	getAll,
	getNote,
	removeNote,
};
