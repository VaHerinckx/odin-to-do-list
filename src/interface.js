import {setAttributes, appendChildren, createElementClass} from './utils'
import {generateNewNoteForm, generateEditNoteForm, generateNewProjectForm} from './form';

const generateBaseElements = function (projects) {
  var content = document.querySelector(".content")
  var newNoteDialog = generateNewNoteForm(projects);
  var editNoteDialog = generateEditNoteForm(projects);
  var newProjectDialog = generateNewProjectForm();
  generateBaseInterface();
  appendChildren(content, [newNoteDialog, editNoteDialog, newProjectDialog]);
  // gnProjectsElements(projects);
}

function generateBaseInterface () {
  var container = document.querySelector(".content");
  var interfaceContainer = gnInterfaceContainer();
  var pageTitle = gnPageTitle();
  var newItemButton = gnNewItemButton();
  var newProjectButton = gnNewProjectButton();
  var projectsContainer = gnProjectsContainer();
  var notesContainer = gnNotesContainer();
  appendChildren(interfaceContainer, [pageTitle, newItemButton, newProjectButton]);
  appendChildren(container, [interfaceContainer, projectsContainer, notesContainer]);
}

function gnInterfaceContainer() {
  var interfaceContainer = createElementClass("div", "interface-container", "");
  return interfaceContainer;
}

function gnPageTitle() {
  var pageTitle = createElementClass("h1", "page-title", "Odin to-do-list tool");
  return pageTitle;
}

function gnNewItemButton() {
  var newItemButton = createElementClass("button", "new-item", "New Item");
  return newItemButton;
}

function gnNewProjectButton() {
  var newItemButton = createElementClass("button", "new-project", "New Project");
  return newItemButton;
}

function gnProjectsContainer() {
  var projectsContainer = createElementClass("div", "projects-container", "");
  return projectsContainer;
}

function gnNotesContainer() {
  var notesContainer = createElementClass("div", "notes-container", "");
  return notesContainer;
}

function gnProjectsElements(projects) {
  var projectsContainer = document.querySelector(".projects-container");
  while (projectsContainer.firstChild) {
    projectsContainer.removeChild(projectsContainer.firstChild);
  };
  projects.forEach(project => projectsContainer.appendChild(gnProjectElement(project)));
}

function gnProjectElement(project) {
  var projectContainer = createElementClass("div", "project-container", "");
  var projectTitle = createElementClass("span", "project-title", project);
  var deleteProjectButton = createElementClass("button", "delete-project-button", "Delete project")
  appendChildren(projectContainer, [projectTitle, deleteProjectButton]);
  return projectContainer
}

export default generateBaseElements;
