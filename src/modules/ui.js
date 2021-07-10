import Storage from "./storage";

export default class UI {
	//! Load content
	static loadPage() {
		UI.loadProjects();
		UI.loadTasks();
	}

	static loadProjects() {
		document.getElementById("projects").innerHTML = "";

		Storage.getProjects().forEach((project) => {
			UI.createProject(project);
		})
	}

	static loadTasks(project) {
		document.getElementById("tasks").innerHTML = "";
		document.getElementById("completed").innerHTML = "";
		document.querySelector("#add-task-popup").style.display = "none";
		document.querySelector("#add-project-popup").style.display = "none";

		if (typeof project === "undefined") {
			document.querySelector("#selected-project").style.visibility = "hidden";
			document.querySelector("#tasks-container").style.visibility = "hidden";
		} else {
			document.querySelector("#selected-project").value = project.name;
			document.querySelector("#tasks").innerHTML = "";
			document.querySelector("#completed").innerHTML = "";
			document.querySelector("#selected-project").style.visibility = "visible";
			document.querySelector("#tasks-container").style.visibility = "visible";

			let taskDivs = [];
			project.tasks.forEach(task => {
				const taskDiv = UI.createTask(task);
				taskDivs.push(taskDiv);
			});
			return taskDivs;
		}
	}


	//! Create content
	static createProject(project) {
		const projectContainer = document.querySelector("#projects");
		const newButton = document.createElement("button");
		newButton.classList.add("project-button")
		newButton.innerHTML = `
			<span>${project.name}</span>
			<i>&times;</i>
		`;
		projectContainer.appendChild(newButton);
		
		return newButton;
	}

	static createTask(task) {
		let taskContainer;
		if (task.completed === false) {
			taskContainer = document.querySelector("#tasks");
		} else {
			taskContainer = document.querySelector("#completed");
		}
		const taskDiv = document.createElement("div");
		taskDiv.classList.add("task");
		taskDiv.innerHTML = `
			<input type="checkbox" class="task-checkbox">
			<button class="task-button">
				<span>${task.name}</span>
				<i>&times;</i>
			</button>
			<div class="task-expand">
				<input type="text" class="task-name-edit" name="Name" placeholder="Name" value="${task.name}">
				<textarea type="text" class="task-description-edit" name="Description" placeholder="Description">${task.description}</textarea>
			</div>
		`;
		if (task.completed === true) {
			taskDiv.querySelector("input").checked = true;
		}
		taskContainer.appendChild(taskDiv);
		return taskDiv;
	}

	//! Expand or collapse content
	static expandCollapseSidebar() {
		const sidebar = document.querySelector("#sidebar");
		const button = document.querySelector("#expand-collapse-sidebar");

		if (button.textContent === "◀") {
			sidebar.classList.add("close");
			button.textContent = "▶";
		} else {
			sidebar.classList.remove("close");
			button.textContent = "◀";
		}
	}
	static expandCollapseTask(taskButton, task) {
		const taskExpand = taskButton.querySelector(".task-expand");

		taskExpand.querySelector(".task-name-edit").value = task.name;
		taskExpand.querySelector(".task-description-edit").value = task.description;
		taskExpand.style.display = (taskExpand.style.display === "flex" ? "none" : "flex");
	}


	//! Find content
	static findProject(projectName) {
		let projectFound;
		document.querySelectorAll(".project-button").forEach((projectButton) => {
			if (projectButton.querySelector("span").textContent === projectName) {
				projectFound = projectButton;
			}
		});
		return projectFound;
	}
}