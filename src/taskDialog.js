function taskDialog(){
    const dialog             = document.createElement('dialog');
    const form               = document.createElement('form');
    const taskNameInput      = document.createElement('input');
    const descriptionInput   = document.createElement('input');
    const dueDate            = document.createElement('input');
    const priorityLabel      = document.createElement('label');
    const priorityInput      = document.createElement('input');
    const checkListLabel     = document.createElement('label');
    const checkListInput     = document.createElement('input');
    const addButton          = document.createElement('button');
    const cancelButton       = document.createElement('button');
    const div                = document.createElement('div');

    taskNameInput.setAttribute("id","taskName");
    taskNameInput.placeholder   = 'Task name';

    descriptionInput.setAttribute("id","description");
    descriptionInput.placeholder      = 'Description';
    //descriptionInput.required   = false;

    dueDate.setAttribute("type","date");


    //priority based on drop down

    //checklist should just be an svg element

    addButton.textContent    = 'Add';
    addButton.classList.add('add-task-button');
    cancelButton.textContent = 'Cancel';
    cancelButton.classList.add('cancel-task-button');

    div.appendChild(cancelButton);
    div.appendChild(addButton);
    div.classList.add('cancel-add');

    form.appendChild(taskNameInput);
    form.appendChild(descriptionInput);
    form.appendChild(dueDate);
    form.appendChild(cancelButton);
    form.appendChild(addButton);

    dialog.classList.add('task-dialog');
    dialog.appendChild(form);

    return dialog;
}

export { taskDialog };