function addMethodsToProject(obj){
    let projectTitle = obj.projectName;    
    let items        = obj.currentProjectTasks;

    const getTitle       = ()      => projectTitle;
    const getItems       = ()      => items;

    const setTitle       = (title) => projectTitle = title;
    let   addItem        = (item)  => items.push(item);

    return {
        getTitle,
        getItems,
        setTitle,
        addItem,
    }
}

export { addMethodsToProject };