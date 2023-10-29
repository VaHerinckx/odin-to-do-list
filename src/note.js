import {setAttributes, appendChildren, createElementClass} from './utils'


const Note = class Note {
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

const generateNote = function () {
  return new Note(document.querySelector("#title").value,
                  document.querySelector("#date").value,
                  document.querySelector("#status").value,
                  document.querySelector("#priority").value,
                  "project",
                  document.querySelector("#description").value);
}

const displayNote = function (note) {
  let noteContainer = createElementClass("div", "note-container", "")
  appendChildren(noteContainer, [createNoteSection("title", note["title"]),
                                 createNoteSection("date", note["date"]),
                                 createNoteSection("status", note["status"]),
                                 createNoteSection("prio", note["prio"]),
                                 createNoteSection("project", note["project"]),
                                 createNoteSection("notes", note["notes"])])
  return noteContainer;
}


const deleteNote = function (note) {
  note.parentElement.remove();
}

function createNoteSection (sectionName, text) {
  var elementContainer = createElementClass("div", `${sectionName}-container`, "");
  var contentTitle = createElementClass("span", `${sectionName}-header`, `${sectionName}`);
  var contentValue = createElementClass("span", `${sectionName}-value`, text);
  appendChildren(elementContainer, [contentTitle, contentValue]);
  return elementContainer
}

export {Note,
        generateNote,
        displayNote,
        deleteNote};
