function addMethodsToProject(obj){
    let projectTitle;
    let tasksAmount;     
    let items;

    ({projectTitle, tasksAmount, items} = obj);

    const getTitle       = ()      => projectTitle;
    const getTasksAmount = ()      => tasksAmount;
    const getItems       = ()      => items;

    const setTitle       = (title) => projectTitle = title;
    const setTasksAmount = ()      => tasksAmount = items.length;
    let   addItem        = (item)  => items.push(item);

    const toJSON         = ()      => ({projectTitle, tasksAmount, items});
    
    return {
        getTitle,
        getTasksAmount,
        getItems,
        setTitle,
        setTasksAmount,
        addItem,
        toJSON,
    }
}

export { addMethodsToProject };