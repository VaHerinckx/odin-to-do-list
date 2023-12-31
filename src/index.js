import './styles.css';
import generateBaseElements from './interface';
import {Note, generateNote, displayNotes, removeElementById, editElementById, adaptNotesDeletedProjects, displayFullNote, displaySmallNote} from './note';
// import {handleCreateNoteOperation, handleEditNoteOperation, handleDeleteNoteOperation, handleCreateProjectOperation, handleDeleteProjectOperation} from './dom';
import { adaptEditFormValues, resetNewNoteFormValues, resetNewProjectFormValues } from './form';
import { generateProject, displayProjects, Project } from './project';
import { accessStoredItem } from './utils';


let notes = accessStoredItem("notes", "array") ? accessStoredItem("notes", "array") : [];
let projects = accessStoredItem("projects", "array") ? accessStoredItem("projects", "array") : [new Project("General", "id-1"), new Project("Study", "id-2"), new Project("Chores", "id-3")];
let id = "";
generateBaseElements(projects);
displayNotes(notes)
displayProjects(projects); //Generate all the base elements for the DOM


//Projects logic
document.addEventListener("click", (event) => {
  //New project code
  if (event.target.classList.contains("new-project")) {
    var newProjectdialog = document.querySelector(".newProjectDialog")
    resetNewProjectFormValues();
    newProjectdialog.showModal();
  }
  if (event.target.classList.contains("close-new-project-dialog")) {
    handleCreateProjectOperation(event)
  }

  //Delete project code
  if (event.target.classList.contains("delete-project-button")) {
    projects = handleDeleteProjectOperation(event, projects);
  }
});

//Notes logic
document.addEventListener("click", (event) => {
  //New note project
  if (event.target.classList.contains("new-item")) {
    var newNotedialog = document.querySelector(".newNoteDialog")
    resetNewNoteFormValues(projects);
    newNotedialog.showModal();
  };
  if (event.target.classList.contains("close-new-note-dialog")) {
    handleCreateNoteOperation(event);
  };

  //Delete note code
  if (event.target.classList.contains("delete-button")) {
    handleDeleteNoteOperation(event)
  }

  //Edit note code
  if (event.target.classList.contains("edit-button")) {
    var editNoteDialog = document.querySelector(".editNoteDialog");
    id = event.target.parentNode.parentNode.dataset.id;
    console.log(id)
    editNoteDialog.showModal();
    adaptEditFormValues(id, notes, projects)
  }
  if (event.target.classList.contains("close-edit-note-dialog")) {
    handleEditNoteOperation(event);
  }
});

//Show less/more note elements logic
document.addEventListener("click", (event) => {
  //Show full note
  if (event.target.classList.contains("show-more-button")) {
    id = event.target.parentNode.dataset.id;
    displayFullNote(id, notes);
  }
  //Show small note
  if (event.target.classList.contains("show-less-button")) {
    id = event.target.parentNode.dataset.id;
    displaySmallNote(id, notes);
  };
});



//Notes DOM functions
function handleCreateNoteOperation (event) {
  event.preventDefault()
  var newNotedialog = document.querySelector(".newNoteDialog")
  var note = generateNote();
  newNotedialog.close();
  notes.push(note);
  displayNotes(notes);
}
function handleEditNoteOperation (event) {
  event.preventDefault()
  var editNoteDialog = document.querySelector(".editNoteDialog");
  notes = editElementById(id, notes)
  editNoteDialog.close();
  displayNotes(notes);
};
function handleDeleteNoteOperation (event) {
  var id = event.target.parentNode.parentNode.dataset.id;
  notes = removeElementById(id, notes);
  displayNotes(notes);
};

//Project DOM functions
function handleCreateProjectOperation (event) {
  event.preventDefault()
  var project = generateProject();
  var newProjectdialog = document.querySelector(".newProjectDialog")
  newProjectdialog.close();
  projects.push(project);
  displayProjects(projects);
};
function  handleDeleteProjectOperation (event) {
  var id = event.target.parentNode.parentNode.dataset.id;
  projects = removeElementById(id, projects);
  displayProjects(projects);
  adaptNotesDeletedProjects(projects, notes);
  return projects
};
