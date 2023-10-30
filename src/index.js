import './styles.css';
import generateBaseElements from './interface';
import {Note, generateNote, displayNotes, removeElementById} from './note';
import {handleCreateOperation, handleEditOperation} from './dom';
import { resetNewFormValues } from './form';
import { Project, generateProject, generateProjectsList, displayProjects } from './project';

let noteCount = 0;
let notes = [];
let projects = [new Project("General"), new Project("Study"), new Project("Chores")];
let content = document.querySelector(".content")
generateBaseElements(generateProjectsList(projects)); //Generate all the base elements for the DOM

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("new-project")) { // If user clicks on new note
    var newProjectdialog = document.querySelector(".newProjectDialog")
    newProjectdialog.showModal();
  }
  if (event.target.classList.contains("close-new-project-dialog")) { // If user finishes update
    event.preventDefault()
    var newProjectdialog = document.querySelector(".newProjectDialog")
    var project = generateProject();
    newProjectdialog.close();
    console.log(projects)
    projects.push(project);
    console.log(projects)
    displayProjects(projects);
  }

  if (event.target.classList.contains("new-item")) { // If user clicks on new note
    var newNotedialog = document.querySelector(".newNoteDialog")
    resetNewFormValues();
    newNotedialog.showModal();
  }
  if (event.target.classList.contains("close-new-note-dialog")) { // If user finishes update
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
