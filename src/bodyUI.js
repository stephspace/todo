import './styles.css';
import { NavBarUI } from "./nav";
import { projectDialog } from './projectDialog';
import { taskDialog } from './taskDialog';
import { projectMethodInit } from './projectMethodInit';
import { deleteProject } from './deleteProject';
import { addProjectsButton } from './addProjectUI';
import { loadProjectPage } from './loadProjectTask';

function bodyUI(){
    const pageContent   = document.querySelector('body');
    const navContent    = document.createElement("div")
    const mainContainer = document.createElement('div');
    const toDoHeader = document.createElement('div');
    mainContainer.classList.add("main-container");

    navContent.classList.add('body-content');

    toDoHeader.textContent = "Todo List";
    toDoHeader.classList.add("toDo");
   
    navContent.appendChild(NavBarUI());
    mainContainer.appendChild(toDoHeader);
    pageContent.appendChild(navContent);
    pageContent.appendChild(mainContainer);
    pageContent.appendChild(projectDialog());
    //pageContent.appendChild(taskDialog());
    addProjectsButton();
    deleteProject();
    loadProjectPage();

}

export { bodyUI };