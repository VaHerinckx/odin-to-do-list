import {setAttributes, appendChildren, createElementClass} from './utils'

const Project = class Project {
  constructor(title, id) {
    Object.assign(this, {title, id});
  };
}

const generateProject = function (projectCount) {
  console.log("project count in generateProject function: " + projectCount)
  return new Project(document.querySelector("#new-project").value,
                     `id-${projectCount}`);
}

const generateProjectsList = function (projects) {
  var projectList = [];
  projects.forEach(project => projectList.push(project.title));
  return projectList;
}

const displayProjects = function (projects) {
  removeDisplayedProjects();
  var projectsContainer = document.querySelector(".projects-container");
  console.log("here is the list of projects to be displayed in function displayProjects")
  projects.forEach(project => {console.log(project)})
  projects.forEach(project => {projectsContainer.appendChild(createProjectSection(project))});
};

function createProjectSection(project) {
  var projectContainer = createElementClass("div", "project-container", "");
  projectContainer.setAttribute("data-id", project["id"]);
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
