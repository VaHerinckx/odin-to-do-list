import {setAttributes, appendChildren, createElementClass} from './utils'


//Class generator
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
    this["project"] = document.querySelector("#project-edit").value;
    return this;
  };
}

//Create a new note object based on values given in the new note form
const generateNote = function (noteCount) {
  return new Note(document.querySelector("#title-new").value,
                  document.querySelector("#date-new").value,
                  document.querySelector("#status-new").value,
                  document.querySelector("#priority-new").value,
                  document.querySelector("#project-new").value,
                  document.querySelector("#description-new").value,
                  `id-${noteCount}`);
}

//Displays all the notes objects in the DOM
const displayNotes = function (notes) {
  removeDisplayedNotes();
  var notesContainer = document.querySelector(".notes-container");
  notes.forEach(note => {notesContainer.appendChild(displayNote(note))});
};

//Individually create the container with all the DOM elements for a note object
function displayNote (note) {
  let noteContainer = createElementClass("div", "note-container", "")
  noteContainer.setAttribute("data-id", note["id"]);
  appendChildren(noteContainer, [createNoteSection("project", note["project"]),
                                 createNoteSection("title", note["title"]),
                                 createNoteSection("date", note["date"]),
                                 createNoteSection("status", note["status"]),
                                 createNoteSection("prio", note["prio"]),
                                 createNoteSection("notes", note["notes"]),
                                 createNoteButtons()]);
  return noteContainer;
}

//Creates one text section of the DOM of the note
function createNoteSection (sectionName, text) {
  var elementContainer = createElementClass("div", `${sectionName}-container`, "");
  var contentTitle = createElementClass("span", `${sectionName}-header`, `${sectionName}`);
  var contentValue = createElementClass("span", `${sectionName}-value`, text);
  appendChildren(elementContainer, [contentTitle, contentValue]);
  return elementContainer
}

//Creates the buttons for the DOM of the note
function createNoteButtons () {
  var elementContainer = createElementClass("div", "button-container", "");
  var editButton = createElementClass("button", "edit-button", "Edit");
  var deleteButton = createElementClass("button", "delete-button", "Delete");
  appendChildren(elementContainer, [editButton, deleteButton]);
  return elementContainer
}

//Removes all the notes currently displayed in the DOM
function removeDisplayedNotes () {
  var notesContainer = document.querySelector(".notes-container");
  while (notesContainer.firstChild) {
      notesContainer.removeChild(notesContainer.firstChild);
    };
}

//Removes the deleted note object from the array
const removeElementById = function (id, notes) {
  const condition = note => note["id"] !== id;
  return notes.filter(condition);
}

//Updates the values of the edited note object and returns the updated array
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
