import {setAttributes, appendChildren, createElementClass} from './utils'

const generateBaseInterface = function () {
  let container = document.querySelector(".content");
  let interfaceContainer = gnInterfaceContainer();
  let pageTitle = gnPageTitle();
  let newItemButton = gnNewItemButton();
  let notesContainer = gnNotesContainer();
  appendChildren(interfaceContainer, [pageTitle, newItemButton]);
  appendChildren(container, [interfaceContainer, notesContainer]);
}

const gnInterfaceContainer = function () {
  let interfaceContainer = createElementClass("div", "interface-container", "");
  return interfaceContainer;
}

const gnPageTitle = function () {
  let pageTitle = createElementClass("h1", "page-title", "Odin to-do-list tool");
  return pageTitle;
}

const gnNewItemButton = function () {
  let newItemButton = createElementClass("button", "new-item", "New Item");
  return newItemButton;
}

const gnNotesContainer = function () {
  let notesContainer = createElementClass("div", "notes-container", "");
  return notesContainer;
}

export default generateBaseInterface;
