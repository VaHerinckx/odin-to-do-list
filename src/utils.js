//Functions used to quickly create elements in JS and add attributes
const setAttributes = function (elements, attributes) {
  elements = Array.isArray(elements) ? elements : [elements];
  Object.keys(attributes).forEach(attr => {
    elements.forEach(element => {
      element.setAttribute(attr, attributes[attr]);
    })
});
}

const appendChildren = function (element, children) {
  children = Array.isArray(children) ? children : [children];
  children.forEach(child => {
      element.appendChild(child);
  });
}

const createElementClass = function(elementType, className, innerText) {
  var newElement = document.createElement(elementType);
  newElement.classList.add(className);
  newElement.innerHTML = innerText;
  return newElement;
}

const removeAllChildren = function (container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  };
}

const storeItem = function (item, storedItemName, type) {
  if (type === "array") {
  var serializedArray = JSON.stringify(item);
  localStorage.setItem(storedItemName, serializedArray);
  }
  if (type === "number") {
  let valueAsString = item.toString();
  localStorage.setItem(storedItemName, valueAsString);
  }
}

const accessStoredItem = function (storedItemName, type) {
  if (type === "array") {
    var storedArray = localStorage.getItem(storedItemName);
    var deserializedObject = JSON.parse(storedArray);
    return deserializedObject;
  }
  if (type === "number") {
    let storedValueAsString = localStorage.getItem(storedItemName);
    let retrievedValue = parseInt(storedValueAsString);
    return retrievedValue;
  }
}

export {
  setAttributes,
  appendChildren,
  createElementClass,
  removeAllChildren,
  storeItem,
  accessStoredItem
};
