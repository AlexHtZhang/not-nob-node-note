console.log('starting notes.js');

const fs = require('fs');

var fetchNotes = () => {

	try {
	  	var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	} catch (e) {
		// don't have to wirte anythig here. the error will be catched and the file will be created.
	}

};

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
	var notes = fetchNotes();
	var note = {
		title,
		body
	};
	// arror function no need for return. it will auto return the expresion.
	var duplicateNotes = notes.filter((note) => note.title === title);
	// note.title is the title of all notes in the notes one by one.
	// filter method return an array of elements survive the callback function.
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

	if (duplicateNotes.length === 0) { // if duplicateNotes.length is not 0 it will return undefined.
		notes.push(note);
		saveNotes(notes);
		return note;
	}

};

var getAll = () => {
	return fetchNotes();
};

var getNote = (title) => {
	var notes = fetchNotes();
	var filteredNotes = notes.filter((note) => note.title === title);
	return filteredNotes[0];
};

var removeNote = (title) => {
	var notes = fetchNotes();
	var filteredNotes = notes.filter((note) => note.title !== title);
	saveNotes(filteredNotes);

	return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
	console.log('--');
	console.log(`Tilte: ${note.title}`);
	console.log(`Body: ${note.body}`);
};

module.exports = {
	addNote, //ES6 sytax suger same as addNote: addNote
	getAll,
	getNote,
	removeNote,
	logNote,
};
