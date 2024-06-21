import './styles.css';

function TodoUI(){
    const body        = document.querySelector('body');
    const bodyContent = document.createElement('div');
    const sideBar     = document.createElement('div');
    const content     = document.createElement('div');

    content.textContent = 'Test';

    sideBar.classList.add('sidebar');
    content.classList.add('content');
    bodyContent.classList.add('body-content');


    bodyContent.appendChild(sideBar);
    bodyContent.appendChild(content);


    body.appendChild(bodyContent);   
}

function sideBarUI(){
    const sideBar     = document.querySelector('.sidebar');
    const profileBtn  = document.createElement('button');
    const todayBtn    = document.createElement('button');
    const weekBtn     = document.createElement('button');
    const projectsBtn = document.createElement('button');
    const addProject  = document.createElement('button');
    const toggleProject = document.createElement('button');
    const addAndToggle =  document.createElement('div');

    addProject.textContent = '+';
    toggleProject.textContent = '\\/';

    projectsBtn.classList.add('project-button');

    profileBtn.textContent  = 'Profile';
    todayBtn.textContent    = 'Today';
    weekBtn.textContent     = 'Week';
    projectsBtn.textContent = 'My Projects';

    sideBar.appendChild(profileBtn);
    sideBar.appendChild(todayBtn);
    sideBar.appendChild(weekBtn);
    sideBar.appendChild(projectsBtn);

    addAndToggle.appendChild(addProject);
    addAndToggle.appendChild(toggleProject);

    projectsBtn.appendChild(addAndToggle);

}

function addProjectsButton(){
    const projects = document.querySelector('.project-button');

    //when clicked show dialog that gets user info and save those in local storage
    projects.addEventListener('click', () => {
        

    });

    //


}

export { TodoUI , sideBarUI};