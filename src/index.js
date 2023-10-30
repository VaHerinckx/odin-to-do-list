import './styles.css';
import generateBaseElements from './interface';
import {Note, generateNote, displayNotes, removeElementById, editElementById} from './note';
import {generateNewNoteForm, generateEditNoteForm} from './form';

let noteCount = 0;
let notes = [];
let id = "";
let content = document.querySelector(".content")
generateBaseElements(); //Generate all the base elements for the DOM

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("new-item")) { // If user clicks on new note
    var newNotedialog = document.querySelector(".newNoteDialog")
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
  if (event.target.classList.contains("delete-button")) { // If user finishes update
    var id = event.target.parentNode.parentNode.dataset.id;
    notes = removeElementById(id, notes);
    displayNotes(notes);
  }
  if (event.target.classList.contains("edit-button")) { // If user finishes update
    var editNoteDialog = document.querySelector(".editNoteDialog");
    var id = event.target.parentNode.parentNode.dataset.id;
    editNoteDialog.showModal();
    editElement(id, notes);
    // if (event.target.classList.contains("close-edit-note-dialog")) {
    //   event.preventDefault()
    //   var editNoteDialog = document.querySelector(".editNoteDialog");
    //   console.log(id)
    //   console.log(notes)
    //   notes = editElementById(id, notes);
    //   console.log(notes)
    //   editNoteDialog.close();
    //   displayNotes(notes);
    // }
}
});

function editElement (id, notes) {
  document.addEventListener("click", (event) => {
  if (event.target.classList.contains("close-edit-note-dialog")) {
    event.preventDefault()
    var editNoteDialog = document.querySelector(".editNoteDialog");
    console.log(notes)
    notes = editElementById(id, notes)
    console.log(notes)
    editNoteDialog.close();
    displayNotes(notes);
  }
})
}

// JavaScript to open and close the dialog
// const openButton = document.getElementById('openDialog');
// const closeButton = document.getElementById('closeDialog');
// const dialog = document.getElementById('dialog');

// openButton.addEventListener('click', () => {
//     dialog.showModal();
// });

// closeButton.addEventListener('click', () => {
//     dialog.style.display = 'none';
// });
