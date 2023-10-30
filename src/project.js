import {setAttributes, appendChildren, createElementClass} from './utils'

const Project = class Project {
  constructor(title) {
    Object.assign(this, {title});
  };
}

const generateProject = function () {
  return new Project(document.querySelector("#new-project").value);
}

const generateProjectsList = function (projects) {
  var projectList = [];
  projects.forEach(project => projectList.push(project.title));
  return projectList;
}

const displayProjects= function (projects) {
  removeDisplayedProjects();
  var projectsContainer = document.querySelector(".projects-container");
  projects.forEach(project => {projectsContainer.appendChild(createProjectSection(project))});
};

function createProjectSection(project) {
  var projectContainer = createElementClass("div", "project-container", "");
  var projectTitle = createElementClass("span", "project-title", project.title);
  var deleteProjectButton = createElementClass("button", "delete-project-button", "Delete project")
  appendChildren(projectContainer, [projectTitle, deleteProjectButton]);
  return projectContainer
}

function removeDisplayedProjects () {
  var projectsContainer = document.querySelector(".projects-container");
  while (projectsContainer.firstChild) {
      projectsContainer.removeChild(projectsContainer.firstChild);
    };
}

export {Project, generateProject, generateProjectsList, displayProjects}
