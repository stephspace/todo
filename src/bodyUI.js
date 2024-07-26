import './styles.css';
import { sideBarUI } from "./sidebarUI";
import { addProjectsButton } from "./addProjectUI";
import { projectDialog } from './projectDialog';
import { taskDialog } from './taskDialog';
import { deleteProject } from "./deleteProject";
import { loadProjectPage } from './projectLoadPage';

function bodyUI(){
    const body        = document.querySelector('body');
    const bodyContent = document.createElement('div');
    const sideBar     = document.createElement('div');
    const content     = document.createElement('div');

    sideBar.classList.add('sidebar');
    content.classList.add('content');
    bodyContent.classList.add('body-content');

    bodyContent.appendChild(sideBar);
    bodyContent.appendChild(content);
    bodyContent.appendChild(projectDialog())
    bodyContent.appendChild(taskDialog())
    body.appendChild(bodyContent);   

    sideBarUI();
    addProjectsButton();
    deleteProject();
    loadProjectPage();
}

export { bodyUI };