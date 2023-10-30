import {setAttributes, appendChildren, createElementClass} from './utils'

const generateNewNoteForm = function() {
  var dialog = createElementClass("dialog", "newNoteDialog", "");
  var formContainer = createElementClass("form", "form-container", "");
  var formObjective = "new"
  formContainer.setAttribute("action", "");
  appendChildren(formContainer, [generateTitleForm(formObjective),
                                 generateDateForm(formObjective),
                                 generateDescForm(formObjective),
                                 generatePriorityForm(formObjective),
                                 generateStatusForm(formObjective),
                                 generateCloseButton(formObjective)]);
  dialog.appendChild(formContainer);
  return dialog
}

const generateEditNoteForm = function() {
  var dialog = createElementClass("dialog", "editNoteDialog", "");
  var formContainer = createElementClass("form", "form-container", "");
  var formObjective = "edit"
  formContainer.setAttribute("action", "");
  appendChildren(formContainer, [generateTitleForm(formObjective),
                                 generateDateForm(formObjective),
                                 generateDescForm(formObjective),
                                 generatePriorityForm(formObjective),
                                 generateStatusForm(formObjective),
                                 generateCloseButton(formObjective)]);
  dialog.appendChild(formContainer);
  return dialog
}

// Generate the different elements of the form
function generateTitleForm (formObjective) {
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

function generateDescForm (formObjective) {
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

function generateDateForm (formObjective) {
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

function generatePriorityForm (formObjective) {
  let priorityContainer = createElementClass("div", "priority-container", "");
  let priorityLabel = createElementClass("label", "priority", "Priority: ");
  setAttributes(priorityLabel, {"for" : "priority"});
  let priorityInput = generateOptionElements("priority", ["Very important", "Important", "Normal", "Not important"], formObjective)
  appendChildren(priorityContainer, [priorityLabel, priorityInput]);
  return priorityContainer;
}

function generateStatusForm (formObjective) {
  let statusContainer = createElementClass("div", "status-container", "");
  let statusLabel = createElementClass("label", "status", "Status: ");
  setAttributes(statusLabel, {"for" : "status"});
  let statusInput = generateOptionElements("status", ["Not started", "Doing", "Done"], formObjective)
  appendChildren(statusContainer, [statusLabel, statusInput]);
  return statusContainer;
}

function generateCloseButton (formObjective) {
  let button = createElementClass("button", `close-${formObjective}-note-dialog`, `${formObjective} note`)
  button.setAttribute("id", `close${formObjective}NoteDialog`)
  return button
}

// Functions to avoid redundant code
function generateOptionElements (inputClass, optionValues, formObjective) {
  var inputElement = createElementClass("select", inputClass, "");
  setAttributes(inputElement, {"id" : `${inputClass}-${formObjective}`});
  optionValues.forEach((option) => inputElement.appendChild(createOptionElement(option)));
  return inputElement;
}

function createOptionElement (value) {
  var option = document.createElement("option")
  option.setAttribute("value", value)
  option.innerText = value;
  return option
}

export {generateNewNoteForm, generateEditNoteForm};
