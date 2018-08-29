console.log('Starting app.js');

const fs = require('fs');
const notes = require('./notes');
const _ = require('lodash');
const yargs = require('yargs');

let argv = yargs.argv;
let command = process.argv[2];
console.log('Command: ', command);
console.log('Yargs: ', argv);

if (command == 'add') {
  let note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note Created');
    notes.logNote(note);
  } else {
    console.log('Note title already in use, be creative man!');
  }
} else if (command == 'list') {
  notes.getAll();
} else if (command == 'read') {
  let note = notes.getNote(argv.title);
  if (note) {
    console.log('Note Found');
    notes.logNote(note);
  } else {
    console.log('Note not found bruv, try another one!');
  }
} else if (command == 'remove') {
  let noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? `Note was removed!` : `Fo ow Fo, Note not found!`;
  console.log(message);
} else {
  console.log('Command not found');
}
