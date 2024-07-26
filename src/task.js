function CreateTask(){
    let title            = '';
    let priority         = '';
    let description      = '';
    let dueDate          = '';
    let checkList        = '';

    const getTitle       = () => title;
    const getPriority    = () => priority;
    const getDescription = () => description;
    const getCheckList   = () => checkList;
    const getDueDate     = () => dueDate;

    const setTitle       = (myTitle)       => title       = myTitle;
    const setPriority    = (myPriority)    => priority    = myPriority;
    const setDescription = (myDescription) => description = myDescription;
    const setCheckList   = (myCheckList)   => checkList   = myCheckList;
    const setDueDate     = (deadline)      => dueDate     = deadline; 

    const toJSON         = () => ({title, priority, description, dueDate, checkList});

    return {  
            getTitle,
            getPriority,
            getDescription,
            getCheckList,
            getDueDate,
            setTitle,
            setPriority,
            setDescription,
            setCheckList,
            setDueDate,
            toJSON
        }         
}

export { CreateTask };