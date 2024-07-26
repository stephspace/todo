function projectDialog(){
    const dialog             = document.createElement('dialog');
    const form               = document.createElement('form');
    const label              = document.createElement('label');
    const input              = document.createElement('input');
    const addButton          = document.createElement('button');
    const cancelButton       = document.createElement('button');
    const div                = document.createElement('div');

    label.textContent        = 'Project Name: ';
    label.setAttribute("for","title");

    input.setAttribute("id","title");
    input.required           = true;

    addButton.textContent    = 'Add';
    addButton.classList.add('add-project-button');
    cancelButton.textContent = 'Cancel';
    cancelButton.classList.add('cancel-project-button');

    div.appendChild(cancelButton);
    div.appendChild(addButton);
    div.classList.add('cancel-add');

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(cancelButton);
    form.appendChild(addButton);

    dialog.classList.add('project-dialog');
    dialog.appendChild(form);

    return dialog;
}

export { projectDialog };




