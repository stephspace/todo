function sideBarUI(){
    const sideBar       = document.querySelector('.sidebar');
    
    const profileBtn    = document.createElement('div');
    const bellSetting   = document.createElement('div');
    const todayBtn      = document.createElement('div');
    const weekBtn       = document.createElement('div');
    const projectsBtn   = document.createElement('div');
    const addAndToggle  = document.createElement('div');

    //toggle button that the svg toggle icon is appended 
    const toggleBtn     = document.createElement('button');
    //add project button that the add svg icon is appended
    const addProjectBtn = document.createElement('button');

    profileBtn.classList.add('profile-icon');

    //appends the bell and setting button
    bellSetting.classList.add('bell-settings');
    todayBtn.classList.add('today-button');
    weekBtn.classList.add('week-button');
    projectsBtn.classList.add('project-button');

    //appends the add and toggle button 
    addAndToggle.classList.add('add-toggle');
    addProjectBtn.classList.add('add-project');
    toggleBtn.classList.add('toggle-btn');

    
    profileBtn.innerHTML    = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0
    24 24"><path d="M9,11.75A1.25,1.25 0 0,0 7.75,13A1.25,1.25 0 0,0 9,14.25A1.25,1.25
    0 0,0 10.25,13A1.25,1.25 0 0,0 9,11.75M15,11.75A1.25,1.25 0 0,0 13.75,13A1.25,1.25 
    0 0,0 15,14.25A1.25,1.25 0 0,0 16.25,13A1.25,1.25 0 0,0 15,11.75M12,2A10,10 0 0,0 2,
    12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,
    11.71 4,11.42 4.05,11.14C6.41,10.09 8.28,8.16 9.26,5.77C11.07,8.33 14.05,10 17.42,
    10C18.2,10 18.95,9.91 19.67,9.74C19.88,10.45 20,11.21 20,12C20,16.41 16.41,20 12,20Z"/></svg>`;
    
    bellSetting.innerHTML   = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M17.75 21.16L15 18.16L16.16 17L17.75 18.59L21.34 15L22.5 16.41L17.75 21.16M10 
    21H12.8C13.04 21.41 13.33 21.79 13.65 22.13C13.29 22.66 12.69 23 12 23C10.9 23 10 22.11 10
    21M3 20V19L5 17V11C5 7.9 7.03 5.18 10 4.29V4C10 2.9 10.9 2 12 2C13.11 2 14 2.9 14 4V4.29C16.97 5.18 19
    7.9 19 11V12.08L18 12L17 12.08V11C17 8.24 14.76 6 12 6C9.24 6 7 8.24 7 11V18H12C12 18.7 12.12
    19.37 12.34 20H3Z" /></svg> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z"/></svg>`;

    todayBtn.innerHTML      = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
    <path d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,
    3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z"/></svg>Today`;
   
    weekBtn.innerHTML       = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
    <path d="M9,10H7V12H9V10M13, 10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,
    3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z"/></svg>Week`;

    addProjectBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0
    1 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>`;

    toggleBtn.innerHTML     = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="2 0 19 19">
    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>`;
    
    profileBtn.appendChild(bellSetting);
    sideBar.appendChild(profileBtn);
    sideBar.appendChild(todayBtn);
    sideBar.appendChild(weekBtn);
    addAndToggle.appendChild(addProjectBtn);
    addAndToggle.appendChild(toggleBtn);

    projectsBtn.textContent = 'My Projects';
    projectsBtn.appendChild(addAndToggle);
    sideBar.appendChild(projectsBtn);
}

export { sideBarUI };