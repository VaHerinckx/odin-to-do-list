import {Note, generateNote, displayNotes, removeElementById, editElementById, } from './note';
import { adaptEditFormValues, resetNewFormValues } from './form';
import { generateProject, displayProjects } from './project';
import { projects, notes, projectCount, noteCount} from './index'

const handleCreateNoteOperation = function (noteCount, notes, projects) {
  var newNotedialog = document.querySelector(".newNoteDialog")
  resetNewFormValues(projects);
  newNotedialog.showModal();
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("close-new-note-dialog")) {
      event.preventDefault()
      var note = generateNote(noteCount);
      newNotedialog.close();
      notes.push(note);
      displayNotes(notes);
      return notes;
    }
  })
};

const handleEditNoteOperation = function (event, notes, projects) {
  var editNoteDialog = document.querySelector(".editNoteDialog");
  var id = event.target.parentNode.parentNode.dataset.id;
  editNoteDialog.showModal();
  adaptEditFormValues(id, notes, projects)
  document.addEventListener("click", (event) => {
  if (event.target.classList.contains("close-edit-note-dialog")) {
    event.preventDefault()
    var editNoteDialog = document.querySelector(".editNoteDialog");
    notes = editElementById(id, notes)
    editNoteDialog.close();
    displayNotes(notes);
    return notes;
  };
});
}

const handleDeleteNoteOperation = function (event, notes) {
  var id = event.target.parentNode.parentNode.dataset.id;
  notes = removeElementById(id, notes);
  displayNotes(notes);
  return notes;
}

//Project DOM code

const handleCreateProjectOperation = function (projects, projectCount) {
  var newProjectdialog = document.querySelector(".newProjectDialog")
  newProjectdialog.showModal();
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("close-new-project-dialog")) {
      event.preventDefault()
      var project = generateProject(projectCount);
      newProjectdialog.close();
      var newProjects = projects
      newProjects.push(project);
      displayProjects(newProjects);
      return newProjects;
    }
  })
};

const handleDeleteProjectOperation = function (event, projects) {
  var id = event.target.parentNode.dataset.id;
  var newProjects = projects
  newProjects = removeElementById(id, projects);
  displayProjects(newProjects);
  return newProjects;
}



export {handleCreateNoteOperation, handleEditNoteOperation, handleDeleteNoteOperation, handleCreateProjectOperation, handleDeleteProjectOperation}
