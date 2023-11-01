import {appendChildren, createElementClass, storeItem, accessStoredItem} from './utils'

let projectCount = accessStoredItem("projectCount", "number") ? accessStoredItem("projectCount", "number") : 3;

const Project = class Project {
  constructor(title, id) {
    Object.assign(this, {title, id});
  };
}

const generateProject = function () {
  projectCount += 1
  storeItem(projectCount, "projectCount", "number");
  return new Project(document.querySelector("#new-project-form").value,
                     `id-${projectCount}`);
}

const generateProjectsList = function (projects) {
  var projectList = [];
  projects.forEach(project => projectList.push(project.title));
  return projectList;
}

const displayProjects = function (projects) {
  removeDisplayedProjects();
  storeItem(projects, "projects", "array");
  var projectsContainer = document.querySelector(".projects-container");
  projects.forEach(project => {projectsContainer.appendChild(createProjectSection(project))});
};

function createProjectSection(project) {
  var projectContainer = createElementClass("div", "project-container", "");
  projectContainer.setAttribute("data-id", project["id"]);
  var projectTitle = createElementClass("span", "project-title", project.title);
  var deleteProjectButton = createElementClass("button", "delete-project-button", "X")
  projectTitle.appendChild(deleteProjectButton)
  projectContainer.append(projectTitle);
  return projectContainer
}

function removeDisplayedProjects () {
  var projectsContainer = document.querySelector(".projects-container");
  while (projectsContainer.firstChild) {
      projectsContainer.removeChild(projectsContainer.firstChild);
    };
}

export {Project, generateProject, generateProjectsList, displayProjects}
