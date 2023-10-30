import './styles.css';
import generateBaseElements from './interface';
import {Note, generateNote, displayNotes, removeElementById} from './note';
import {handleCreateOperation, handleEditOperation} from './dom';

let noteCount = 0;
let notes = [];
let id = "";
let content = document.querySelector(".content")
generateBaseElements(); //Generate all the base elements for the DOM

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("new-item")) { // User adds a note
    var newNotedialog = document.querySelector(".newNoteDialog")
    newNotedialog.showModal();
    noteCount += 1;
    notes = handleCreateOperation(noteCount, notes)
    console.log(notes)
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
