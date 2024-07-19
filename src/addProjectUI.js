import { CreateProject } from "./project";

function addProjectsButton(){
    const projectDialog = document.querySelector('.project-dialog');
    const plusButton    = document.querySelector('.add-project');
    const title         = document.querySelector('#title');
    const cancelButton  = document.querySelector('.cancel-project-button');
    const addButton     = document.querySelector('.add-project-button');
    const projectSubSection = document.querySelector('.project-subsection');
   
    //when clicked show dialog that gets user info and save those in local storage
    plusButton.addEventListener('click', () => {
        projectDialog.showModal();
    });

    //when clicked show dialog that gets user info and save those in local storage
    cancelButton.addEventListener('click', (e) => {
        e.preventDefault();
        projectDialog.close();
        title.value = '';
    });

    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        let project  = document.createElement('span');
        let projectName  = document.createElement('span');
        project.classList.add('my-project');

        let deleteButton = document.createElement('div');
        deleteButton.innerHTML =  `<?xml version="1.0" encoding="utf-8"?><svg 
        id="project-delete-button" width="800px" height="800px" viewBox="0 0 24 24"
        fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M5 5L19 19M5 19L19 5" 
        stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
        
        let currProj = CreateProject();

        if(title.value){
            currProj.setTitle(title.value.trim());

            projectName.textContent = '#    '+currProj.getTitle();
            project.appendChild(projectName);
            project.appendChild(deleteButton);
            projectSubSection.appendChild(project);

            localStorage.setItem(currProj.getTitle(), JSON.stringify(currProj.getItems()));
            title.value = '';
            projectDialog.close();
        }
    });
}

export { addProjectsButton };