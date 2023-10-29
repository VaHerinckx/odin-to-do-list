import {setAttributes, appendChildren, createElementClass} from './utils'

const generateForm = function() {
  var dialog = createElementClass("dialog", "noteDialog", "");
  var formContainer = createElementClass("form", "form-container", "");
  formContainer.setAttribute("action", "");
  appendChildren(formContainer, [gnTitleForm(),
                        gnDateForm(),
                        gnPriorityForm(),
                        gnStatusForm(),
                        gnCloseButton()]);
  dialog.appendChild(formContainer);
  return dialog
}

// Generate the different elements of the form
function gnTitleForm () {
  let titleContainer = createElementClass("div", "title-container", "");
  let titleLabel = createElementClass("label", "title", "Title: ");
  setAttributes(titleLabel, {"for" : "title"});
  let titleInput = createElementClass("input", "title", "");
  setAttributes(titleInput, {"id" : "title",
                             "name" : "title",
                             "type" : "text",
                             "placeholder" : "Do laundry"});
  appendChildren(titleContainer, [titleLabel, titleInput]);
  return titleContainer;
}

function gnDateForm () {
  let dateContainer = createElementClass("div", "date-container", "");
  let dateLabel = createElementClass("label", "date", "Due date: ");
  setAttributes(dateLabel, {"for" : "date"});
  let dateInput = createElementClass("input", "date", "");
  setAttributes(dateInput, {"id" : "date",
                             "name" : "date",
                             "type" : "date"});
  appendChildren(dateContainer, [dateLabel, dateInput]);
  return dateContainer;
}

function gnPriorityForm () {
  let priorityContainer = createElementClass("div", "priority-container", "");
  let priorityLabel = createElementClass("label", "priority", "Priority: ");
  setAttributes(priorityLabel, {"for" : "priority"});
  let priorityInput = gnOptionElements("priority", ["Very important", "Important", "Normal", "Not important"])
  appendChildren(priorityContainer, [priorityLabel, priorityInput]);
  return priorityContainer;
}

function gnStatusForm () {
  let statusContainer = createElementClass("div", "status-container", "");
  let statusLabel = createElementClass("label", "status", "Status: ");
  setAttributes(statusLabel, {"for" : "status"});
  let statusInput = gnOptionElements("status", ["Not started", "Doing", "Done"])
  appendChildren(statusContainer, [statusLabel, statusInput]);
  return statusContainer;
}

function gnCloseButton () {
  let button = createElementClass("button", "close-dialog", "Add note")
  button.setAttribute("id", "closeDialog")
  return button
}

// Functions to avoid redundant code

function gnOptionElements (inputClass, optionValues) {
  var inputElement = createElementClass("input", inputClass, "");
  setAttributes(inputElement, {"id" : "inputClass"});
  optionValues.forEach((option) => inputElement.appendChild(createOptionElement(option)));
  return inputElement;
}

function createOptionElement (value) {
  var option = document.createElement("option")
  option.setAttribute("value", value)
  option.innerText = value;
  return option
}

export default generateForm;
