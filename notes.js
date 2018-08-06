console.log('starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
	var notes = [];
	var note = {
		title,
		body
	};

	notes.push(note);
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
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
