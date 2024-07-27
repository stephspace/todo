function NavBarUI(){
    let nav                = document.createElement("div");
    let profileContainer   = document.createElement("div");
    let todayContainer     = document.createElement("div");
    let weekContainer      = document.createElement("div");
    let projectContainer   = document.createElement("div");
    let myProjects         = document.createElement("span");
    let today              = document.createElement("span");
    let week               = document.createElement("span");
    let projectsSubsection = document.createElement("div");
    const dateIcon1        = document.createElement("img");
    const dateIcon2        = document.createElement("img");
    const profileIcon      = document.createElement("img");
    const bellIcon         = document.createElement("img");
    const viewIcon         = document.createElement("img");
    const addIcon          = document.createElement("img");
    let bellAndView        = document.createElement("span");


    
    nav.classList.add("nav-bar");

    //adds svg background images to elements
    profileIcon.classList.add("profile-icon");
    //profileIcon.src = "./profile.svg"
    bellIcon.classList.add("bell-icon");
    viewIcon.classList.add("view-icon");
    dateIcon1.classList.add("date-icon");
    dateIcon2.classList.add("date-icon");
    addIcon.classList.add("add-icon");

    //adds text content inside elements
    today.textContent = "Today";
    week.textContent  = "Week";
    myProjects.textContent = "My Projects";

    profileContainer.classList.add("profile-container");  
    profileContainer.appendChild(profileIcon);
    bellAndView.appendChild(bellIcon);
    bellAndView.appendChild(viewIcon);
    profileContainer.appendChild(bellAndView);

    todayContainer.appendChild(dateIcon1);
    todayContainer.appendChild(today);
    todayContainer.classList.add("today-container")

    weekContainer.appendChild(dateIcon2);
    weekContainer.appendChild(week);
    weekContainer.classList.add("week-container")

    projectContainer.appendChild(myProjects);
    projectContainer.appendChild(addIcon);
    projectContainer.classList.add("my-projects");

    projectsSubsection.classList.add("projects-subsection");
    
    nav.appendChild(profileContainer);
    nav.appendChild(todayContainer);
    nav.appendChild(weekContainer);
    nav.appendChild(projectContainer);
    nav.appendChild(projectsSubsection);

    return nav;
}

export { NavBarUI };