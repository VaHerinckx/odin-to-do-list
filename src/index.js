import './styles.css';
import generateBaseElements from './interface';
import {Note, generateNote, displayNotes, removeElementById, editElementById} from './note';
// import {handleCreateNoteOperation, handleEditNoteOperation, handleDeleteNoteOperation, handleCreateProjectOperation, handleDeleteProjectOperation} from './dom';
import { adaptEditFormValues, resetNewFormValues } from './form';
import { generateProject, displayProjects, Project } from './project';

let noteCount = 0;
let projectCount = 3;
let notes = [];
let projects = [new Project("General", "id-1"), new Project("Study", "id-2"), new Project("Chores", "id-3")];
let content = document.querySelector(".content")
generateBaseElements(projects);
displayProjects(projects); //Generate all the base elements for the DOM

document.addEventListener("click", (event) => {
  //Projects logic
  //New project code
  if (event.target.classList.contains("new-project")) {
    projectCount += 1
    let newProjCount = projectCount + 1;
    console.log(newProjCount)
    projects = handleCreateProjectOperation(projects, newProjCount)
  }
  //Delete project code
  if (event.target.classList.contains("delete-project-button")) {
    projects = handleDeleteProjectOperation(event, projects);
  }

  //Notes logic
  //New note project
  if (event.target.classList.contains("new-item")) {
    noteCount +=1;
    handleCreateNoteOperation(noteCount, notes, projects);
  }
  //Delete note code
  if (event.target.classList.contains("delete-button")) {
    handleDeleteNoteOperation(event, notes)
  }
  //Edit note code
  if (event.target.classList.contains("edit-button")) {
    handleEditNoteOperation(event, notes, projects);
  }
})


//Notes DOM functions
function handleCreateNoteOperation (noteCount, notes, projects) {
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
    }
  })
};
function handleEditNoteOperation (event, notes, projects) {
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
  };
});
};
function handleDeleteNoteOperation (event, notes) {
  var id = event.target.parentNode.parentNode.dataset.id;
  notes = removeElementById(id, notes);
  displayNotes(notes);
};

//Project DOM functions
function handleCreateProjectOperation (projects, projectCount) {
  var newProjectdialog = document.querySelector(".newProjectDialog")
  newProjectdialog.showModal();
  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("close-new-project-dialog")) {
      event.preventDefault()
      console.log("project count in handle function: " + projectCount)
      var project = generateProject(projectCount);
      console.log("new project generated is")
      console.log(project)
      newProjectdialog.close();
      projects.push(project);
      console.log("projects after push of new proj")
      projects.forEach(project => {console.log(project)})
      displayProjects(projects);
    }
  })
  return projects;
};
function  handleDeleteProjectOperation (event, projects) {
  var id = event.target.parentNode.dataset.id;
  projects = removeElementById(id, projects);
  displayProjects(projects);
  return projects
};
