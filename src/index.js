import './styles.css';
import generateBaseInterface from './interface';
import {newNote, displayNote, deleteNote} from './note';
import generateForm from './form';


let content = document.querySelector(".content")
generateBaseInterface();
let note = new newNote("Laundry", "25/02", "Done", "3", "daily", "Blabla")
console.log(note)
note.updateNote("title", "laundry done")
console.log(note)


document.addEventListener("click", (event) => {
  if (event.target.classList.contains("new-item")) {
    var dialog = generateForm();
    content.appendChild(dialog);
    dialog.showModal();
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
