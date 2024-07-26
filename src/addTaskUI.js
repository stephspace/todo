import { addMethodsToProject } from "./projectmethodadder";
import { CreateTask } from "./task";

function getTaskAdder(){
    let taskAdderButton = document.querySelector('.add-task');
    let taskDialog      = document.querySelector('.task-dialog');
    let addButton       = document.querySelector('.add-task-button');
    let cancelButton    = document.querySelector('.cancel-task-button');
    let taskNameValue            = document.querySelector('#taskName');
    let taskDescriptionValue    = document.querySelector('#description');

    taskAdderButton.addEventListener('click', (e) => {
        e.preventDefault();
        taskDialog.showModal();
    });

    addButton.addEventListener('click', (e) => {
        e.preventDefault();
        let content    = document.querySelector(".content");
        let projectName = content.firstChild.textContent;

        let taskContainer = document.createElement("div");
        let taskTitle     = document.createElement("span");


        if(taskNameValue.value){
            let currentTask    = CreateTask();
           
            let currentProjectTasks = JSON.parse(localStorage.getItem(projectName));
            let currentProject  = addMethodsToProject({projectName,currentProjectTasks});

            currentTask.setTitle(taskNameValue.value);
            taskTitle.textContent = currentTask.getTitle();
            taskContainer.appendChild(taskTitle);

            currentTask.setDescription(taskDescriptionValue.value);
            //currentTask.setDueDate();
            //currentTask.setPriority();
            //currentTask.setCheckList();
            content.appendChild(taskContainer);
            currentProject.addItem(currentTask.toJSON());

            localStorage.setItem(currentProject.getTitle(), JSON.stringify(currentProject.getItems()));
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