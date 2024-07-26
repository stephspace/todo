import { add } from "date-fns";
import { getTaskAdder } from "./addTaskUI";

function loadProjectPage(){
    document.addEventListener('click', (e) => {
        if(e.target.parentNode.className === "my-project"){
            let projectContentPage = document.querySelector(".content");
            let projectTitle       = document.createElement("div");
            let addTask            = document.createElement("div");
            addTask.textContent    = 'Add Task';
            addTask.classList.add('add-task');
            
            while(projectContentPage.firstChild){
                projectContentPage.removeChild(projectContentPage.firstChild);
            }

            projectTitle.textContent = e.target.firstChild.textContent.replace("#","").trim();
            projectTitle.classList.add("project-title");

            let projectTasks = JSON.parse(localStorage.getItem(projectTitle.textContent));

            projectContentPage.appendChild(projectTitle);
            projectContentPage.appendChild(addTask);

            for(let i = 0; i < projectTasks.length; i++){
                let taskDiv = document.createElement("div");
                let name = document.createElement("span");

                name.textContent = projectTasks[i].title;
                taskDiv.appendChild(name);
                projectContentPage.appendChild(taskDiv);
            }

            getTaskAdder();
        }
    });
}

export { loadProjectPage };