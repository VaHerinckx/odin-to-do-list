import {Note, generateNote, displayNotes, removeElementById, editElementById, } from './note';
import { adaptEditFormValues, resetNewFormValues } from './form';
import { generateProject, displayProjects } from './project';

const handleCreateOperation = function (noteCount, notes, projects) {
  var newNotedialog = document.querySelector(".newNoteDialog")
  resetNewFormValues(projects);
  newNotedialog.showModal();
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("close-new-note-dialog")) {
      event.preventDefault()
      var newNotedialog = document.querySelector(".newNoteDialog")
      var note = generateNote(noteCount);
      newNotedialog.close();
      notes.push(note);
      displayNotes(notes);
    }
  })
};

const handleEditOperation = function (id, notes, projects) {
  adaptEditFormValues(id, notes, projects)
  document.addEventListener("click", (event) => {
  if (event.target.classList.contains("close-edit-note-dialog")) {
    event.preventDefault()
    var editNoteDialog = document.querySelector(".editNoteDialog");
    notes = editElementById(id, notes)
    editNoteDialog.close();
    displayNotes(notes);
  };
});
}


const handleCreateProjectOperation = function (projects, projectCount) {
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("close-new-project-dialog")) {
      event.preventDefault()
      var newProjectdialog = document.querySelector(".newProjectDialog")
      var project = generateProject(projectCount);
      newProjectdialog.close();
      projects.push(project);
      displayProjects(projects);
    }
  })
};



export {handleCreateOperation, handleEditOperation, handleCreateProjectOperation}
