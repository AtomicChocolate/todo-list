// TODO: Local Storage saving here
let projects = [];

export default class Storage {
	static saveProjects() {
		console.log("save");
		localStorage.setItem("projects", JSON.stringify(projects));
	}

	static getProjects() {
		//Convert data from local storage
		console.log("get");
		projects = JSON.parse(localStorage.getItem("projects"));

		if (projects === null) {
			projects = [];
		}

		//todoList.setProjects(todoList.getProjects().map((project) => Object.assign(new Project(), project)),);

		//todoList.getProjects().forEach((project) => project.setTasks(project.getTasks().map((task) => Object.assign(new Task(), task)),),);

		return projects;
	}

	static addProject(project) {
		projects.push(project);
		Storage.saveProjects();
	}

	static updateProject(projectName, newProjectVersion) {

		projects.splice(projects.indexOf(Storage.findProject(projectName)), 1, newProjectVersion);

		Storage.saveProjects();
	}

	static deleteProject(project) {
		projects.splice(projects.indexOf(project), 1);
		Storage.saveProjects();
	}

	static findProject(projectName) {
		return projects.find(project => project.name === projectName);
	}

	static addTask(project, task) {
		project.tasks.push(task);
		Storage.saveProjects();
	}

	static updateTask(project, taskName, newTaskVersion) {
		project.tasks.splice(project.tasks.indexOf(Storage.findTask(project, taskName)), 1, newTaskVersion);
		Storage.updateProject(project.name, project);
		Storage.saveProjects();
	}

	static deleteTask(project, task) {
		project.tasks.splice(project.tasks.indexOf(task), 1);
		Storage.saveProjects();
	}

	static findTask(project, taskName) {
		return project.tasks.find(task => task.name === taskName);
	}
}