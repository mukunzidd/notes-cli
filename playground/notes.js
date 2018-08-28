console.log('Starting notes.js');

const addNote = (title, body) => console.log(title, body);
const getAll = () => console.log('Getting all notes');
const getNote = title => console.log(`Getting ${title}`);
const removeNote = title => console.log(`Removing ${title}`);

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
