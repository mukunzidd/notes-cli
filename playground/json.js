const fs = require('fs');

let originalNote = {
  title: 'Some note title',
  body: 'Some note body and it can be long'
};

// Convert and write note to file
let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

// Parse note from the json file
let note = JSON.parse(originalNoteString);

console.log(typeof note);
console.log(note.title);
