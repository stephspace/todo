function addMethodsToProject(obj){
    let projectTitle;    
    let items;

    ({projectTitle, tasksAmount, items} = obj);

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