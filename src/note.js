import {appendChildren, createElementClass, storeItem, accessStoredItem, removeAllChildren} from './utils'


let noteCount = accessStoredItem("noteCount", "number") ? accessStoredItem("noteCount", "number") : 0;

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
const generateNote = function () {
  noteCount +=1;
  storeItem(noteCount, "noteCount", "number");
  return new Note(document.querySelector("#title-new").value,
                  document.querySelector("#date-new").value,
                  document.querySelector("#status-new").value,
                  document.querySelector("#priority-new").value,
                  document.querySelector("#project-new").value,
                  document.querySelector("#description-new").value,
                  `id-${noteCount}`);
}

//Displays all the notes objects in the DOM, in project containers
const displayNotes = function (notes) {
  removeDisplayedNotes();
  storeItem(notes, "notes", "array");
  var notesContainer = document.querySelector(".notes-container");
  var uniqueProjects = [];
  notes.forEach((note) => {uniqueProjects.includes(note["project"]) ? '' : uniqueProjects.push(note["project"])});
  uniqueProjects.forEach(function (project) {
    var projectContainer = createElementClass("div", "project-container", "");
    projectContainer.setAttribute("id", `project-${project}`);
    notes.forEach(function (note) {
      if (note["project"] === project) {
        projectContainer.appendChild(createNoteContainer(note))
      }
    })
    notesContainer.appendChild(projectContainer)
  })
};

//Individually create the container with all the DOM elements for a note object
function createNoteContainer (note) {
  let noteContainer = createElementClass("div", "note-container", "")
  noteContainer.setAttribute("data-id", note["id"]);
  appendChildren(noteContainer, [createElementClass("span", `project-value`, note["project"]),
                                 createNoteSection("title", note["title"]),
                                 createNoteSection("date", note["date"]),
                                 createNoteButtons(),
                                 createElementClass("button", "show-more-button", "Details")]);
  return noteContainer;
}

const displayFullNote = function (id, notes) {
  const noteContainer = document.querySelector(`div[data-id="${id}"]`);
  removeAllChildren(noteContainer);
  const note = selectElementById(id, notes)
  appendChildren(noteContainer, [createElementClass("button", "show-less-button", "X"),
                                 createElementClass("span", `project-value`, note["project"]),
                                 createNoteSection("title", note["title"]),
                                 createNoteSection("date", note["date"]),
                                 createNoteSection("status", note["status"]),
                                 createNoteSection("prio", note["prio"]),
                                 createNoteSection("notes", note["notes"]),
                                 createNoteButtons()]);
}


const displaySmallNote = function (id, notes) {
  const noteContainer = document.querySelector(`div[data-id="${id}"]`);
  removeAllChildren(noteContainer);
  const note = selectElementById(id, notes)
  appendChildren(noteContainer, [createElementClass("span", `project-value`, note["project"]),
                                 createNoteSection("title", note["title"]),
                                 createNoteSection("date", note["date"]),
                                 createNoteButtons()],
                                 createElementClass("button", "show-more-button", "Details"));
};



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

const selectElementById = function (id, notes) {
  let newNote = "";
  notes.forEach(function (note) {
    if (note["id"] === id) {
      newNote = note;
    }
  });
  return newNote
};

const adaptNotesDeletedProjects = function (projects, notes) {
  var projectList = [];
  projects.forEach(project => projectList.push(project.title));
  console.log(projectList)
  var newNotes = [];
  notes.forEach(function (note) {
    if (projectList.includes(note.project)) {
      newNotes.push(note);
      console.log(note)
    }
    else {
      note.project = "";
      console.log(note)
      newNotes.push(note);
    }
  });
  displayNotes(newNotes);
}


export {Note,
        generateNote,
        displayNotes,
        adaptNotesDeletedProjects,
        removeElementById,
        editElementById,
        displayFullNote,
        displaySmallNote};
