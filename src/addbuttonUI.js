import { CreateProject } from "./project";

function addProjectsButton(){
    const projectDialog = document.querySelector('.project-dialog');
    const plusButton    = document.querySelector('.add-project');
    const title         = document.querySelector('#title');
    const cancelButton  = document.querySelector('.cancel-project-button');
    const addButton     = document.querySelector('.add-project-button');
    const myProjects    = document.querySelector('.sidebar');
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

        let project  = document.createElement('div');
        let currProj = CreateProject();

        if(title.value){
            currProj.setTitle('#    '+title.value);

            project.textContent = currProj.getTitle();
            projectSubSection.appendChild(project);

            localStorage.setItem(currProj.getTitle(), JSON.stringify(currProj.getItems()));
            title.value = '';
            projectDialog.close();
        }
    });
}

export { addProjectsButton };