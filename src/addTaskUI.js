import { CreateTask } from "./createTask";
import { projectMethodInit } from "./projectMethodInit";

function getTaskAdder(){
    let taskAdderButton = document.querySelector('.task-header-btn');
    let taskDialog      = document.querySelector('.task-dialog');
    let addButton       = document.querySelector('.add-task-button');
    let cancelButton    = document.querySelector('.cancel-task-button');
    let taskNameValue            = document.querySelector('#taskName');
    let projectName            = document.querySelector('.taskName');
    let taskDescriptionValue    = document.querySelector('#description');
    let allTasks                = document.createElement("div");

    taskAdderButton.addEventListener('click', (e) => {
        e.preventDefault();
        taskDialog.showModal();
    });

    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        let taskContainer = document.createElement("div");
        let taskTitle     = document.createElement("span");
        let mainContent   = document.querySelector(".main-container");
        let taskInfoContainer = document.createElement("div");
        let editTask           = document.createElement("span");
        let details                 = document.createElement("span");
        let deleteButton       = document.createElement("span");
        let date            = document.createElement("span");

        editTask.classList.add("task-edit");
        deleteButton.classList.add("delete-task");
        date.textContent = "date";
        details.textContent = "Details";
        details.classList.add("details");

        taskInfoContainer.appendChild(details);
        taskInfoContainer.appendChild(date);
        taskInfoContainer.appendChild(editTask);
        taskInfoContainer.appendChild(deleteButton);
        taskInfoContainer.classList.add("task-info-container")

       
        allTasks.classList.add("all-tasks");

        if(taskNameValue.value){
            let currentTask    = CreateTask();
           
            let currentProjectTasks = JSON.parse(localStorage.getItem(projectName));
            let currentProject  = projectMethodInit({projectName,currentProjectTasks});

            currentTask.setTitle(taskNameValue.value);
            taskTitle.textContent = currentTask.getTitle();
            taskContainer.appendChild(taskTitle);
            taskContainer.appendChild(taskInfoContainer);
            taskContainer.classList.add("task-container")

            currentTask.setDescription(taskDescriptionValue.value);
            //currentTask.setDueDate();
            //currentTask.setPriority();
            //currentTask.setCheckList();
            allTasks.appendChild(taskContainer)
            mainContent.appendChild(allTasks);
            currentProject.setProjectTask(currentTask.getTaskInfo());
            localStorage.setItem(currentProject.getProjectTitle(), JSON.stringify(currentProject.getProjectTasks()));
            taskNameValue.value = '';
            taskDialog.close();
        }
        e.stopImmediatePropagation();
    });

    cancelButton.addEventListener('click', (e) => {
        e.preventDefault();
        taskDialog.close();
    });
}

export { getTaskAdder };