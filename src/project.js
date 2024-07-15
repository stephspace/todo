function CreateProject(){
    let projectTitle     = '';
    let items            = [];

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

export { CreateProject };