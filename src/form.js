import {setAttributes, appendChildren, createElementClass} from './utils'


// Aggregate the form elements to create the two forms (new note and edit note)

const generateNewNoteForm = function() {
  var dialog = createElementClass("dialog", "newNoteDialog", "");
  var formContainer = createElementClass("form", "form-container", "");
  var formObjective = "new"
  formContainer.setAttribute("action", "");
  appendChildren(formContainer, [generateTitleContainer(formObjective),
                                 generateDateContainer(formObjective),
                                 generateDescContainer(formObjective),
                                 generatePriorityContainer(formObjective),
                                 generateStatusContainer(formObjective),
                                 generateProjectContainer(formObjective),
                                 generateCloseButton(formObjective)]);
  dialog.appendChild(formContainer);
  return dialog
}

const generateEditNoteForm = function() {
  var dialog = createElementClass("dialog", "editNoteDialog", "");
  var formContainer = createElementClass("form", "form-container", "");
  var formObjective = "edit"
  formContainer.setAttribute("action", "");
  appendChildren(formContainer, [generateTitleContainer(formObjective),
                                 generateDateContainer(formObjective),
                                 generateDescContainer(formObjective),
                                 generatePriorityContainer(formObjective),
                                 generateStatusContainer(formObjective),
                                 generateProjectContainer(formObjective),
                                 generateCloseButton(formObjective)]);
  dialog.appendChild(formContainer);
  return dialog
}

const generateNewProjectForm = function() {
  var dialog = createElementClass("dialog", "newProjectDialog", "");
  var formContainer = createElementClass("form", "form-container", "");
  var formObjective = "new-project"
  formContainer.setAttribute("action", "");
  formContainer.appendChild(generateNewProjectContainer());
  dialog.appendChild(formContainer);
  return dialog
}



// Generate individually the different elements of the forms

function generateTitleContainer (formObjective) {
  let titleContainer = createElementClass("div", "title-container", "");
  let titleLabel = createElementClass("label", "title", "Title: ");
  setAttributes(titleLabel, {"for" : "title"});
  let titleInput = createElementClass("input", "title", "");
  setAttributes(titleInput, {"id" : `title-${formObjective}`,
                             "name" : "title",
                             "type" : "text",
                             "placeholder" : "Do laundry"});
  appendChildren(titleContainer, [titleLabel, titleInput]);
  return titleContainer;
}

function generateDescContainer (formObjective) {
  let descriptionContainer = createElementClass("div", "description-container", "");
  let descriptionLabel = createElementClass("label", "description", "Description: ");
  setAttributes(descriptionLabel, {"for" : "description"});
  let descriptionInput = createElementClass("textarea", "description", "");
  setAttributes(descriptionInput, {"id" : `description-${formObjective}`,
                                   "name" : "description",
                                   "cols" : "30",
                                   "rows" : "7",
                                   "placeholder" : "Wash all black clothes"});
  appendChildren(descriptionContainer, [descriptionLabel, descriptionInput]);
  return descriptionContainer;
}

function generateDateContainer (formObjective) {
  let dateContainer = createElementClass("div", "date-container", "");
  let dateLabel = createElementClass("label", "date", "Due date: ");
  setAttributes(dateLabel, {"for" : "date"});
  let dateInput = createElementClass("input", "date", "");
  setAttributes(dateInput, {"id" : `date-${formObjective}`,
                             "name" : "date",
                             "type" : "date"});
  appendChildren(dateContainer, [dateLabel, dateInput]);
  return dateContainer;
}

function generatePriorityContainer (formObjective) {
  let priorityContainer = createElementClass("div", "priority-container", "");
  let priorityLabel = createElementClass("label", "priority", "Priority: ");
  setAttributes(priorityLabel, {"for" : "priority"});
  let priorityInput = generateOptionElements("priority", ["Very important", "Important", "Normal", "Not important"], formObjective, "Normal")
  appendChildren(priorityContainer, [priorityLabel, priorityInput]);
  return priorityContainer;
}

function generateStatusContainer (formObjective) {
  let statusContainer = createElementClass("div", "status-container", "");
  let statusLabel = createElementClass("label", "status", "Status: ");
  setAttributes(statusLabel, {"for" : "status"});
  let statusInput = generateOptionElements("status", ["Not started", "Doing", "Done"], formObjective, "Doing")
  appendChildren(statusContainer, [statusLabel, statusInput]);
  return statusContainer;
}

function generateProjectContainer (formObjective) {
  let projectContainer = createElementClass("div", "project-container", "");
  let projectLabel = createElementClass("label", "project", "Project: ");
  setAttributes(projectLabel, {"for" : "project"});
  let projectInput = generateOptionElements("project", ["General", "Study"], formObjective, "General")
  appendChildren(projectContainer, [projectLabel, projectInput]);
  return projectContainer;
}


function generateCloseButton (formObjective) {
  let button = createElementClass("button", `close-${formObjective}-note-dialog`, `${formObjective} note`)
  button.setAttribute("id", `close${formObjective}NoteDialog`)
  return button
}

function generateNewProjectContainer () {
  let newProjectContainer = createElementClass("div", "new-project-container", "");
  let newProjectLabel = createElementClass("label", "new-project", "New Project: ");
  setAttributes(newProjectLabel, {"for" : "new-project"});
  let newProjectInput = createElementClass("input", "new-project", "");
  setAttributes(newProjectInput, {"id" : "new-project",
                             "name" : "new-project",
                             "type" : "text",
                             "placeholder" : "Sport"});
  var button = createElementClass("button", `close-new-project-dialog`, `add new project`)
  button.setAttribute("id", `closeNewProjectDialog`)
  appendChildren(newProjectContainer, [newProjectLabel, newProjectInput, button]);
  return newProjectContainer;
}


// Functions to avoid redundant code
function generateOptionElements (inputClass, optionValues, formObjective, defaultValue) {
  var inputElement = createElementClass("select", inputClass, "");
  setAttributes(inputElement, {"id" : `${inputClass}-${formObjective}`,
                               "value": defaultValue});
  optionValues.forEach((option) => inputElement.appendChild(createOptionElement(option, defaultValue)));
  return inputElement;
}

function createOptionElement(value, defaultValue) {
  var option = document.createElement("option");
  option.setAttribute("value", value);
  option.innerText = value;
  if (value === defaultValue) {
    option.selected = true;
  }
  return option;
}


// Input the values of original note when edit is selected

const adaptEditFormValues = function (id, notes) {
  const condition = note => note["id"] === id;
  var note = notes.filter(condition)[0];
  console.log(note)
  document.querySelector("#title-edit").value = note["title"];
  document.querySelector("#date-edit").value = note["date"];
  document.querySelector("#status-edit").value = note["status"];
  document.querySelector("#priority-edit").value = note["prio"];
  document.querySelector("#description-edit").value = note["notes"];
  document.querySelector("#project-edit").value = note["project"];
}

// Reset the values when new note form is generated

const resetNewFormValues = function () {
  document.querySelector("#title-new").value = "";
  document.querySelector("#date-new").value = "";
  document.querySelector("#status-new").value = "Not started";
  document.querySelector("#priority-new").value = "Very important";
  document.querySelector("#description-new").value = "";
  document.querySelector("#project-new").value = "None";
}

export {generateNewNoteForm, generateEditNoteForm, generateNewProjectForm, adaptEditFormValues, resetNewFormValues};
