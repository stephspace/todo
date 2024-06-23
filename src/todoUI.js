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
    const profileBtn  = document.createElement('div');
    const todayBtn    = document.createElement('div');
    const weekBtn     = document.createElement('div');
    const projectsBtn = document.createElement('div');
    const addProject  = document.createElement('button');
    const toggleProject = document.createElement('button');
    const addAndToggle =  document.createElement('div');

    addProject.classList.add('add-project');
    addProject.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
                            /></svg>`;

    toggleProject.classList.add('chevron');
    toggleProject.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 19 19"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                            /></svg>`;
    
    addAndToggle.classList.add('add-andtoggle');

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