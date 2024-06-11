function TodoController(){
    let projects = [];

    //use this method for pushing into the array
    const addProject = (proj) => projects.push(proj);

    let decision = prompt(`To create project enter 1
                        To create task enter 2
                        To exit enter 3`
                        );

    while(decision != 3){
        if(decision == 1){
            proj  = CreateProject();
            title = prompt("Enter project title: ");
            proj.setTitle(title);
            projects.push(proj);

        } else if(decision == 2){
                let proj = prompt("Which project to add task: ");
                let currProj = '';
                let currTask = CreateTask();

                for(let i = 0; i < projects.length; i++){
                    if(projects[i].getTitle() == proj){
                        currProj = projects[i];
                        break;
                    }
                }
                let title = prompt("Enter title of task: ");
                currTask.setTitle(title);
                let priority = prompt("Enter priority level: ");
                currTask.setPriority(priority);
                let description = prompt("Enter description: ");
                currTask.setDescription(description);

                currProj.setItems(currTask);
        }
            decision = prompt(`To create project enter 1\n
            To create task enter 2\n
            To exit enter 3`
        );
    }
    for(let i = 0; i < projects.length; i++){
        console.log(projects[i].getTitle());
        for(let j = 0; j < projects[i].getItems().length; j++){
            console.log(projects[j].getItems()[j].getTitle());
            console.log(projects[j].getItems()[j].getPriority());
            console.log(projects[j].getItems()[j].getDescription());
            console.log(projects[j].getItems()[j].getCheckList());

        }
    }
}

function CreateProject(){
    let projectName      = '';
    let tasksAmount      =  0;
    let items            = [];

    const getTitle       = ()       => projectName;
    const getTasksAmount = ()       => tasksAmount;
    const getItems       = ()       => items;

    const setTitle       = (title)  => projectName = title;
    const setTasksAmount = ()       => tasksAmount = items.length;
    let   setItems       = (item)   => items.push(item);
    
    return {getTitle, getTasksAmount, getItems, setTitle, setTasksAmount, setItems}
}

function CreateTask(){
    let title            = '';
    let priority         = '';
    let description      = '';
    let checkList        =  0; //0 for not marked and 1 for marked 

    const getTitle       = () => title;
    const getPriority    = () => priority;
    const getDescription = () => description;
    const getCheckList   = () => checkList;

    const setTitle       = (myTitle)       => title = myTitle;
    const setPriority    = (myPriority)    => priority = myPriority;
    const setDescription = (myDescription) =>  description = myDescription;
    const setCheckList   = (myCheckList)   => checkList = myCheckList;

    return {getTitle, getPriority, getDescription, getCheckList, setTitle,
            setPriority, setDescription, setCheckList
        }
}

TodoController();