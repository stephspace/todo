function taskDialog(){
    const taskDialog               = document.createElement('dialog');
    const form                     = document.createElement('form');
    const taskName                 = document.createElement('input');
    const taskDescription          = document.createElement('textarea');
    const taskDueDate              = document.createElement('input');
    const taskDueDateLabel              = document.createElement('label');
    const taskDueDateContainer      = document.createElement('div');

    

    const taskPriority             = document.createElement('input');
    const checkListLabel           = document.createElement('label');
    const checkListInput           = document.createElement('input');
    const addButton                = document.createElement('button');
    const cancelButton             = document.createElement('button');
    const cancelAndAddContainer    = document.createElement('div');
    const dateAndPriorityContainer = document.createElement('div');

    const selectContainer          = document.createElement('div');
    const selectLabel              = document.createElement('label');
    const select                   = document.createElement('select');
    const selectOption1            = document.createElement('option');
    const selectOption2            = document.createElement('option');
    const selectOption3            = document.createElement('option');


    selectLabel.for = "prioritySelect";
    selectLabel.textContent = "Priority: ";
    selectLabel.for = "priority-select"
    select.setAttribute("id", "priority-select");

    selectOption1.value = "Low";
    selectOption2.value = "medium";
    selectOption3.value = "high";

    selectOption1.textContent = "low";
    selectOption2.textContent = "medium";
    selectOption3.textContent = "high";

    select.appendChild(selectOption1);
    select.appendChild(selectOption2);
    select.appendChild(selectOption3);
    selectContainer.appendChild(selectLabel);
    selectContainer.appendChild(select);

    taskDialog.classList.add("task-dialog");

    taskName.setAttribute("id","taskName");
    taskName.placeholder   = 'Task Name';
    taskName.autocomplete = "off";
    taskName.required = true;

    taskDescription.setAttribute("id","description");
    taskDescription.placeholder      = 'Description';
    //descriptionInput.required   = false;

    taskDueDate.setAttribute("type","date");
    taskDueDate.setAttribute("id","date");
    taskDueDateLabel.for = "date";
    taskDueDateLabel.textContent = "Due Date: ";
    taskDueDateContainer.appendChild(taskDueDateLabel);
    taskDueDateContainer.appendChild(taskDueDate);

    addButton.textContent    = 'Add';
    addButton.classList.add('add-task-button');
    cancelButton.textContent = 'Cancel';
    cancelButton.classList.add('cancel-task-button');

    cancelAndAddContainer.appendChild(cancelButton);
    cancelAndAddContainer.appendChild(addButton);
    cancelAndAddContainer.classList.add("canceladd-container");

    dateAndPriorityContainer.classList.add("date-priority");
    dateAndPriorityContainer.appendChild(taskDueDateContainer);
    dateAndPriorityContainer.appendChild(selectContainer);
    dateAndPriorityContainer.classList.add("date-priority");

    form.appendChild(taskName);
    form.appendChild(dateAndPriorityContainer);
    form.appendChild(taskDescription);
    form.appendChild(cancelAndAddContainer);

    taskDialog.classList.add('task-dialog');
    taskDialog.appendChild(form);

    return taskDialog;
}

export { taskDialog };