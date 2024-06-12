function CreateProject(){
    let projectName      = '';
    let tasksAmount      =  0;
    let items            = [];

    const getTitle       = ()      => projectName;
    const getTasksAmount = ()      => tasksAmount;
    const getItems       = ()      => items;

    const setTitle       = (title) => projectName = title;
    const setTasksAmount = ()      => tasksAmount = items.length;
    let   setItems       = (item)  => items.push(item);
    
    return {getTitle, getTasksAmount, getItems, setTitle, setTasksAmount, setItems}
}

export default CreateProject;