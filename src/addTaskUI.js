import { CreateTask } from "./createTask";
import { projectMethodInit } from "./projectMethodInit";
import { format, compareAsc } from "date-fns";

function getTaskAdder(){
    let taskAdderButton = document.querySelector('.task-header-btn');
    let taskDialog      = document.querySelector('.task-dialog');
    let addButton       = document.querySelector('.add-task-button');
    let cancelButton    = document.querySelector('.cancel-task-button');
    let taskNameValue            = document.querySelector('#taskName');
    let projectName            = document.querySelector('.task-name');
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
        let taskDueDate            = document.querySelector("#date");
        let date            = document.createElement("span");
        let prioritySelect = document.querySelector("#priority-select");
                            

        let dateArray = taskDueDate.value.split("-");
    
        editTask.classList.add("task-edit");
        deleteButton.classList.add("delete-task");

        date.textContent = format(new Date(dateArray[0], dateArray[1], dateArray[2]),
         "MM/dd/yyyy");

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
           
            let currentProjectTasks = JSON.parse(localStorage.getItem(projectName.textContent));
            let currentProject  = projectMethodInit();
            currentProject.setProjectTitle(projectName.textContent);
            currentProject.setProjectTask(currentProjectTasks);

            console.log("56",currentProjectTasks);
            console.log("60",projectName.textContent);

            currentTask.setTitle(taskNameValue.value);
            currentTask.setPriority(prioritySelect.options[prioritySelect.selectedIndex].text);
            currentTask.setDescription(taskDescriptionValue.value);
            currentTask.setDueDate(`${taskDueDate.value}`);

            if(currentTask.getPriority() === 'low') taskContainer.classList.add("low");
            else if(currentTask.getPriority() === 'medium') taskContainer.classList.add("medium");
            else if(currentTask.getPriority() === 'high') taskContainer.classList.add("high");

            taskTitle.textContent = currentTask.getTitle();
            taskContainer.appendChild(taskTitle);
            taskContainer.appendChild(taskInfoContainer);
            taskContainer.classList.add("task-container")

            allTasks.appendChild(taskContainer)
            mainContent.appendChild(allTasks);
            currentProject.addProjectTask(currentTask.getTaskInfo());
            localStorage.setItem(currentProject.getProjectTitle(), JSON.stringify(currentProject.getProjectTasks()));
            taskNameValue.value = '';
            taskDescriptionValue.value = '';
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