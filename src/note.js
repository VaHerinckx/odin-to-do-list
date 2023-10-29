import {setAttributes, appendChildren, createElementClass} from './utils'


const newNote = class Note {
  constructor(title, date, status, prio, project, notes) {
    Object.assign(this, {title, date, status, prio, project, notes});
  };
  updateNote = function(property, newValue) {
    this[property] = newValue;
  };
  readNote = function(property) {
    return this[property];
  }
}

// const generateNote = function ()


const displayNote = function (note) {
  let noteContainer = createElementClass("div", "note-container", "")
  let title = createElementClass("span", "note-title", note["title"]);
  let date = createElementClass("span", "note-title", note["date"]);
  let status = createElementClass("span", "note-title", note["status"]);
  let prio = createElementClass("span", "note-title", note["prio"]);
  let project = createElementClass("span", "note-title", note["project"]);
  let notes = createElementClass("span", "note-title", note["prio"]);
  appendChildren(noteContainer, [title, date, status, prio, project, notes]);
}

const deleteNote = function (note) {
  note.parentElement.remove();
}



export {newNote,
        displayNote,
        deleteNote};
