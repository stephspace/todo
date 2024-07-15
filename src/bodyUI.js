import './styles.css';
import { sideBarUI } from "./sidebarUI";
import { addProjectsButton } from "./addbuttonUI";
import { projectDialog } from './projectDialog';

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
    body.appendChild(bodyContent);   

    sideBarUI();
    addProjectsButton();
}

export { bodyUI };