import CreateProject from "./project";
import CreateTask    from "./task";
import { compareAsc, format } from "date-fns";

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
            let proj  = CreateProject();
            let title = prompt("Enter project title: ");
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
                let year  = prompt("Enter due date year: ");
                let month = prompt("Enter due date month:");
                let day   = prompt("Enter due date day:");
                let date  = format(new Date(year, month, day), "yyyy-MM-dd");
                currTask.setDueDate(date);

                currProj.setItems(currTask);
        }
            decision = prompt(`To create project enter 1\n
            To create task enter 2\n
            To exit enter 3`);
    }

    for(let i = 0; i < projects.length; i++){
        console.log(projects[i].getTitle());
        for(let j = 0; j < projects[i].getItems().length; j++){
            console.log(projects[j].getItems()[j].getTitle());
            console.log(projects[j].getItems()[j].getPriority());
            console.log(projects[j].getItems()[j].getDescription());
            console.log(projects[j].getItems()[j].getDueDate());
            console.log(projects[j].getItems()[j].getCheckList());

        }
    }
}

export default TodoController;