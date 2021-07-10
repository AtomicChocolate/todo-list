import Project from "./modules/project.js";
import Task from "./modules/task.js";
import UI from "./modules/ui.js";
import Storage from "./modules/storage.js";
import "./styles/style.css";

// ! Project
let selectedProject;

function projectSelect(button) {
	const project = Storage.findProject(button.querySelector("span").textContent);

	if (selectedProject !== undefined) {
		selectedProject.classList.remove("selected");
	}
	button.classList.add("selected");
	selectedProject = button;

	const tasks = UI.loadTasks(project);
	tasks.forEach(task => {
		addTaskEvents(task);
	})
}

function projectDelete(event, button) {
	const project = Storage.findProject(button.querySelector("span").textContent);

	event.stopPropagation();
	Storage.deleteProject(project);
	UI.findProject(project.name).remove();

	const nextProject = document.querySelector(".project-button");
	if (nextProject !== null) {
		nextProject.click();
	} else {
		UI.loadTasks();
	}
}

//Add project events for new buttons being added
function addProjectEvents(button) {
	button.addEventListener("click", (event) => projectSelect(button));
	button.querySelector("i").addEventListener("click", (event) => projectDelete(event, button));
}


// ! Adding new projects
const addProjectPopup = document.querySelector("#add-project-popup");
const newProjectName = document.querySelector("#add-project-popup-input");

function newProjectClick() {
	newProjectName.value = "";
	newProjectName.placeholder = "";
	addProjectPopup.style.display = "block";
	newProjectName.focus();
}

function newProjectCancel() {
	addProjectPopup.style.display = "none";
}

function newProjectAdd() {
	if (newProjectName.value === "") {
		newProjectName.placeholder = "Name can't be blank";
	} else if (Storage.findProject(newProjectName.value) !== undefined) {
		newProjectName.value = "";
		newProjectName.placeholder = "Name is already used";
	} else {
		newProjectCancel();

		const newProject = new Project(newProjectName.value);
		const newProjectButton = UI.createProject(newProject);
		Storage.addProject(newProject);

		addProjectEvents(newProjectButton);
	}
}

//Add project if the Enter key is pressed in the input box
function newProjectInputKeyup(event) {
	if (event.keyCode === 13) {
		document.querySelector("#add-project-popup-add").click();
	}
}

//Clear the placeholder (can't be blank message) on input focus
function newProjectInputFocus() {
	newProjectName.placeholder = "";
}

document.querySelector("#new-project-button").addEventListener("click", newProjectClick);
document.querySelector("#add-project-popup-cancel").addEventListener("click", newProjectCancel);
document.querySelector("#add-project-popup-add").addEventListener("click", newProjectAdd);
newProjectName.addEventListener("focus", newProjectInputFocus);
newProjectName.addEventListener("keyup", newProjectInputKeyup)

//! Sidebar Open/Close Button

document.querySelector("#expand-collapse-sidebar").addEventListener("click", UI.expandCollapseSidebar);


// ! Renaming project
const projectName = document.querySelector("#selected-project");

function projectNameInput() {
	if (projectName.value !== selectedProject.name) {
		projectName.style.color = "gray";
		projectName.style.fontStyle = "italic";
	} else {
		projectName.style.color = "white";
		projectName.style.fontStyle = "normal";
	}
}

function projectNameDefocus() {
	const currentProject = Storage.findProject(selectedProject.querySelector("span").textContent);

	if (projectName.value !== "") {
		const newProjectVersion = new Project(projectName.value, currentProject.tasks);
		Storage.updateProject(currentProject.name, newProjectVersion);
		selectedProject.querySelector("span").textContent = projectName.value;
	} else {
		projectName.value = currentProject;
	}
	projectName.style.color = "white";
	projectName.style.fontStyle = "normal";
}

function projectNameKeydown(event) {
	if (event.keyCode === 13) {
		event.preventDefault(); //Prevent creating a new line
	}
}

function projectNameKeyup(event) {
	if (event.keyCode === 13) {
		projectName.blur();
	}
}

projectName.addEventListener("input", projectNameInput);
projectName.addEventListener("blur", projectNameDefocus);
projectName.addEventListener("keydown", projectNameKeydown);
projectName.addEventListener("keyup", projectNameKeyup);


// ! Tasks
function taskComplete(event, taskDiv, input) {
	event.stopPropagation();
	const currentProject = Storage.findProject(selectedProject.querySelector("span").textContent);
	const currentTask = Storage.findTask(currentProject, taskDiv.querySelector("span").textContent);
	let newTaskVersion = new Task(currentTask.name, currentTask.description);

	if (input.checked == false) {
		newTaskVersion.completed = false;
		document.querySelector("#tasks").appendChild(taskDiv);
	} else {
		newTaskVersion.completed = true;
		document.querySelector("#completed").appendChild(taskDiv);
	}
	Storage.updateTask(currentProject, currentTask.name, newTaskVersion);
}

function taskClick(taskDiv) {

	const currentProject = Storage.findProject(selectedProject.querySelector("span").textContent);
	const currentTask = Storage.findTask(currentProject, taskDiv.querySelector("span").textContent);

	if (taskDiv.querySelector(".task-expand").style.display !== "none") {
		let newTaskVersion = new Task(currentTask.name, currentTask.description);

		const oldTaskName = currentTask.name;
		const nameInput = taskDiv.querySelector(".task-name-edit");
		const descriptionInput = taskDiv.querySelector(".task-description-edit");
		
		if (nameInput.value !== "") {
			newTaskVersion.name = nameInput.value;
			taskDiv.querySelector("span").textContent = newTaskVersion.name;
		}
		newTaskVersion.description = descriptionInput.value;
		newTaskVersion.completed = taskDiv.querySelector(".task-checkbox").checked;
		Storage.updateTask(currentProject, oldTaskName, newTaskVersion);
	}

	UI.expandCollapseTask(taskDiv, currentTask);
}

//Edit task if the Enter key is pressed in an input box
function taskInputKeyup(event, taskDiv) {
	if (event.keyCode === 13) {
		taskDiv.querySelector("button").click();
	}
}

function taskDelete(event, taskDiv) {
	event.stopPropagation();
	const currentProject = Storage.findProject(selectedProject.querySelector("span").textContent);
	const currentTask = Storage.findTask(currentProject, taskDiv.querySelector("span").textContent);

	Storage.deleteTask(currentProject, currentTask);
	taskDiv.remove();
}

//Add task events for new divs being added
function addTaskEvents(taskDiv) {
	taskDiv.querySelector("input").addEventListener("input", (event) => taskComplete(event, taskDiv, taskDiv.querySelector("input")));
	taskDiv.querySelector("button").addEventListener("click", (event) => taskClick(taskDiv));
	taskDiv.querySelector(".task-name-edit").addEventListener("keyup", (event) => taskInputKeyup(event, taskDiv));
	taskDiv.querySelector("i").addEventListener("click", (event) => taskDelete(event, taskDiv));
}


// ! Adding new tasks
const addTaskPopup = document.querySelector("#add-task-popup");
const newTaskName = document.querySelector("#add-task-popup-input");

function newTaskClick() {
	newTaskName.value = "";
	newTaskName.placeholder = "";
	addTaskPopup.style.display = "block";
	newTaskName.focus();
}

function newTaskCancel() {
	addTaskPopup.style.display = "none";
}

function newTaskAdd() {
	const currentProject = Storage.findProject(selectedProject.querySelector("span").textContent);

	if (newTaskName.value === "") {
		newTaskName.placeholder = "Name can't be blank";
	} else if (Storage.findTask(currentProject, newTaskName.value) !== undefined) {
		newTaskName.value = "";
		newTaskName.placeholder = "Name is already used";
	} else {
		newTaskCancel();

		const newTaskVersion = new Task(newTaskName.value);
		const newTaskDiv = UI.createTask(newTaskVersion);
		Storage.addTask(currentProject, newTaskVersion);

		addTaskEvents(newTaskDiv);
	}
}

//Clear the placeholder (can't be blank message) on input focus
function newTaskInputFocus() {
	newTaskName.placeholder = "";
}

//Add task if the Enter key is pressed in the input box
function newTaskInputKeyup(event) {
	if (event.keyCode === 13) {
		document.querySelector("#add-task-popup-add").click();
	}
}

document.querySelector("#new-task-button").addEventListener("click", newTaskClick);
document.querySelector("#add-task-popup-cancel").addEventListener("click", newTaskCancel);
document.querySelector("#add-task-popup-add").addEventListener("click", newTaskAdd);
newTaskName.addEventListener("focus", newTaskInputFocus);
newTaskName.addEventListener("keyup", newTaskInputKeyup);


//! Initialize page
UI.loadPage();
Storage.getProjects().forEach((project) => {
	addProjectEvents(UI.findProject(project.name));
});

//todo: figure out why updating tasks doesn't save