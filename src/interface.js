import {setAttributes, appendChildren, createElementClass} from './utils'
import {generateNewNoteForm, generateEditNoteForm} from './form';

const generateBaseElements = function () {
  let content = document.querySelector(".content")
  let newNoteDialog = generateNewNoteForm();
  let editNoteDialog = generateEditNoteForm();
  generateBaseInterface();
  content.appendChild(newNoteDialog);
  content.appendChild(editNoteDialog);
}

function generateBaseInterface () {
  let container = document.querySelector(".content");
  let interfaceContainer = gnInterfaceContainer();
  let pageTitle = gnPageTitle();
  let newItemButton = gnNewItemButton();
  let notesContainer = gnNotesContainer();
  appendChildren(interfaceContainer, [pageTitle, newItemButton]);
  appendChildren(container, [interfaceContainer, notesContainer]);
}

function gnInterfaceContainer() {
  let interfaceContainer = createElementClass("div", "interface-container", "");
  return interfaceContainer;
}

function gnPageTitle() {
  let pageTitle = createElementClass("h1", "page-title", "Odin to-do-list tool");
  return pageTitle;
}

function gnNewItemButton() {
  let newItemButton = createElementClass("button", "new-item", "New Item");
  return newItemButton;
}

function gnNotesContainer() {
  let notesContainer = createElementClass("div", "notes-container", "");
  return notesContainer;
}

export default generateBaseElements;
