import {Note, generateNote, displayNotes, removeElementById, editElementById} from './note';


const handleCreateOperation = function (noteCount, notes) {
  document.querySelector(".newNoteDialog").addEventListener("click", (event) => {
    if (event.target.classList.contains("close-new-note-dialog")) {
      event.preventDefault()
      var newNotedialog = document.querySelector(".newNoteDialog")
      var note = generateNote(noteCount);
      var newNotes = notes;
      newNotedialog.close();
      newNotes.push(note);
      displayNotes(newNotes);
      return newNotes;
    };
  });
};

const handleEditOperation = function (id, notes) {
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


export {handleCreateOperation, handleEditOperation}
