/*import { CreateProject } from "./project";
import { addMethodsToProject } from "./projectmethodadder";
import { CreateTask } from "./task";
import { compareAsc, format } from "date-fns";

function TodoController(){
        if(){
            let projs = CreateProject();
            projs.setTitle(prompt("Enter project title: "));
            localStorage.setItem(projs.getTitle(), JSON.stringify(projs));
        } else if(decision == 2){
                let currTask = CreateTask();
                let projChoice = prompt('Enter project title to add: ');
                
                let project = addMethodsToProject(JSON.parse(localStorage.getItem(projChoice)));

                currTask.setTitle(prompt("Enter title of task: "));
                currTask.setPriority(prompt("Enter priority level: "));
                currTask.setDescription(prompt("Enter description: "));
                currTask.setDueDate(format(new Date(prompt("Enter due date year: "),
                prompt("Enter due date month:"), prompt("Enter due date day:") ),
                "yyyy-MM-dd"));
    
                project.addItem(currTask.toJSON());
                localStorage.setItem(project.getTitle(), JSON.stringify(project.toJSON()));
        }  else if(decision == 3){
            break;
        }
        decision = prompt(` To create project enter 1\n
                            To create task enter 2\n
                            To exit enter 3`);
    }
}

export default TodoController;
*/