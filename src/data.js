function createProject(){
    let projects = [];

    let answers = prompt('Do you want to create tasks? y/n');

    while(answers === 'y'){
        let proj = createTask();
        console.log(proj);

        proj.getTitle = prompt("Enter title: ");
        proj.getPriority = prompt("Enter priority: ");
        proj.getCheckList = prompt("Enter checklist: ");
        proj.getDescription = prompt("Enter description: ");

        projects.push(proj);
        console.log(projects);

        answers = prompt("Do you want to create another tasks? y/n");
    }

    return {};
}

function createTask(){
    let title       = '';
    let priority    = '';
    let description = '';
    let checkList   = 0; //0 for not marked and 1 for marked 

    const getTitle       = () => title;
    const getPriority    = () => priority;
    const getDescription = () => description;
    const getCheckList   = () => checkList;

    const setTitle       = (myTitle)       => title = myTitle;
    const setPriority    = (myPriority)    => priority = myPriority;
    const setDescription = (myDescription) =>  description = myDescription;
    const setCheckList   = (myCheckList)   => checkList = myCheckList;

    return {getTitle,
            getPriority,
            getDescription,
            getCheckList,
            setTitle,
            setPriority,
            setDescription,
            setCheckList,
        }
}

createProject();