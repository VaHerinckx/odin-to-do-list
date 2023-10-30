import {setAttributes, appendChildren, createElementClass} from './utils'


const Note = class Note {
  constructor(title, date, status, prio, project, notes, id) {
    Object.assign(this, {title, date, status, prio, project, notes, id});
  };
  updateNote = function() {
    this["title"] = document.querySelector("#title-edit").value;
    this["date"] = document.querySelector("#date-edit").value;
    this["status"] = document.querySelector("#status-edit").value;
    this["prio"] = document.querySelector("#priority-edit").value;
    this["notes"] = document.querySelector("#description-edit").value;
    return this;
  };
}

const generateNote = function (noteCount) {
  return new Note(document.querySelector("#title-new").value,
                  document.querySelector("#date-new").value,
                  document.querySelector("#status-new").value,
                  document.querySelector("#priority-new").value,
                  "project",
                  document.querySelector("#description-new").value,
                  `id-${noteCount}`);
}

const displayNotes = function (notes) {
  removeDisplayedNotes();
  var notesContainer = document.querySelector(".notes-container");
  notes.forEach(note => {notesContainer.appendChild(displayNote(note))});
};

function displayNote (note) {
  let noteContainer = createElementClass("div", "note-container", "")
  noteContainer.setAttribute("data-id", note["id"]);
  appendChildren(noteContainer, [createNoteSection("title", note["title"]),
                                 createNoteSection("date", note["date"]),
                                 createNoteSection("status", note["status"]),
                                 createNoteSection("prio", note["prio"]),
                                 createNoteSection("project", note["project"]),
                                 createNoteSection("notes", note["notes"]),
                                 createNoteButtons()]);
  return noteContainer;
}

function createNoteSection (sectionName, text) {
  var elementContainer = createElementClass("div", `${sectionName}-container`, "");
  var contentTitle = createElementClass("span", `${sectionName}-header`, `${sectionName}`);
  var contentValue = createElementClass("span", `${sectionName}-value`, text);
  appendChildren(elementContainer, [contentTitle, contentValue]);
  return elementContainer
}

function createNoteButtons () {
  var elementContainer = createElementClass("div", "button-container", "");
  var editButton = createElementClass("button", "edit-button", "Edit");
  var deleteButton = createElementClass("button", "delete-button", "Delete");
  appendChildren(elementContainer, [editButton, deleteButton]);
  return elementContainer
}

function removeDisplayedNotes () {
  var notesContainer = document.querySelector(".notes-container");
  while (notesContainer.firstChild) {
      notesContainer.removeChild(notesContainer.firstChild);
    };
}

const removeElementById = function (id, notes) {
  const condition = note => note["id"] !== id;
  return notes.filter(condition);
}

const editElementById = function (id, notes) {
  var newNotes = [];
  notes.forEach(note => {note["id"] === id ? newNotes.push(note.updateNote()) : newNotes.push(note)});
  return newNotes;

}

export {Note,
        generateNote,
        displayNotes,
        removeElementById,
        editElementById};
