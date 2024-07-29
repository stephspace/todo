function CreateTask(){
    let title            = '';
    let priority         = '';
    let description      = '';
    let dueDate          = '';

    const getTitle       = () => title;
    const getPriority    = () => priority;
    const getDescription = () => description;
    const getDueDate     = () => dueDate;

    const getTaskInfo    = () => ({
    title, priority, description, dueDate
    });

    const setTitle       = (taskTitle)       => title       = taskTitle;
    const setPriority    = (taskPriority)    => priority    = taskPriority;
    const setDescription = (taskDescription) => description = taskDescription;
    const setDueDate     = (taskDeadline)    => dueDate     = taskDeadline; 

    return { getTitle, getPriority, getDescription, getDueDate,
    getTaskInfo, setTitle, setPriority, setDescription, setDueDate }         
}

export { CreateTask };