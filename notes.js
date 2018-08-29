console.log('Starting notes.js');
const fs = require('fs');

let fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};
let saveNotes = notes => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  let notes = fetchNotes();
  let note = { title, body };
  let duplicates = notes.filter(note => note.title === title);

  if (duplicates.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => console.log('Getting all notes');
const getNote = title => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter(note => note.title === title);
  return filteredNotes[0];
};
const removeNote = title => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter(note => note.title != title);
  saveNotes(filteredNotes);
  console.log(filteredNotes);
  return notes.length !== filteredNotes.length;
};
const logNote = note => {
  debugger;
  console.log('--');
  console.log('Title: ', note.title);
  console.log('Body: ', note.body);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
