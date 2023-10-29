import './styles.css';
import generateBaseInterface from './interface';
import {Note, generateNote, displayNote, deleteNote} from './note';
import generateForm from './form';

let notes = [];
let content = document.querySelector(".content")
generateBaseInterface();

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("new-item")) { // If user clicks on new note
    var dialog = generateForm();
    content.appendChild(dialog);
    dialog.showModal();
  }
  if (event.target.classList.contains("close-dialog")) { // If user finishes update
    event.preventDefault()
    console.log("button close clicked")
    var dialog = document.querySelector(".noteDialog")
    console.log(dialog)
    var notesContainer = document.querySelector(".notes-container");
    var note = generateNote();
    dialog.close();
    notes.push(note);
    notesContainer.appendChild(displayNote(note))
  }
})

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
