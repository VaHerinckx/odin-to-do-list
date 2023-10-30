import './styles.css';
import generateBaseElements from './interface';
import {Note, generateNote, displayNotes, removeElementById} from './note';
import {handleCreateOperation, handleEditOperation} from './dom';
import { resetNewFormValues } from './form';
import { Project, generateProject, generateProjectsList, displayProjects } from './project';

let noteCount = 0;
let projectCount = 3;
let notes = [];
let projects = [new Project("General", "id-1"), new Project("Study", "id-2"), new Project("Chores", "id-3")];
let content = document.querySelector(".content")
generateBaseElements(projects);
displayProjects(projects); //Generate all the base elements for the DOM

document.addEventListener("click", (event) => {
  //Projects logic
  if (event.target.classList.contains("new-project")) { // If user clicks on new note
    var newProjectdialog = document.querySelector(".newProjectDialog")
    newProjectdialog.showModal();
  }
  if (event.target.classList.contains("close-new-project-dialog")) { // If user finishes update
    event.preventDefault()
    var newProjectdialog = document.querySelector(".newProjectDialog")
    projectCount +=1;
    var project = generateProject(projectCount);
    newProjectdialog.close();
    projects.push(project);
    displayProjects(projects);
  }
  if (event.target.classList.contains("delete-project-button")) { // User removes a project
    var id = event.target.parentNode.dataset.id;
    projects = removeElementById(id, projects);
    console.log(projects)
    displayProjects(projects);
  }

  //Notes logic
  if (event.target.classList.contains("new-item")) { // If user clicks on new note
    var newNotedialog = document.querySelector(".newNoteDialog")
    resetNewFormValues(projects);
    newNotedialog.showModal();
  }
  if (event.target.classList.contains("close-new-note-dialog")) { // If user finishes new note
    event.preventDefault()
    var newNotedialog = document.querySelector(".newNoteDialog")
    noteCount +=1;
    var note = generateNote(noteCount);
    newNotedialog.close();
    notes.push(note);
    displayNotes(notes);
  }
  if (event.target.classList.contains("delete-button")) { // User removes a note
    var id = event.target.parentNode.parentNode.dataset.id;
    notes = removeElementById(id, notes);
    displayNotes(notes);
  }
  if (event.target.classList.contains("edit-button")) { // User updates a note
    var editNoteDialog = document.querySelector(".editNoteDialog");
    id = event.target.parentNode.parentNode.dataset.id;
    editNoteDialog.showModal();
    handleEditOperation(id, notes);
  }
})
