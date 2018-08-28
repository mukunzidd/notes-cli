console.log('Starting app.js');

const fs = require('fs');
const notes = require('./notes');
const _ = require('lodash');
const yargs = require('yargs');

let argv = yargs.argv;
let command = process.argv[2];
console.log('Command', command);
console.log('Argv: ', argv);

if (command == 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command == 'list') {
  notes.getAll();
} else if (command == 'read') {
  notes.getNote(argv.title);
} else if (command == 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command not found');
}
