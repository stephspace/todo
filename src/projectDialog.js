function projectDialog(){
    const dialog        = document.createElement('dialog');
    const form          = document.createElement('form');
    const label         = document.createElement('label');
    const input         = document.createElement('input');
    const addButton     = document.createElement('button');
    const cancelButton  = document.createElement('button');
    const div           = document.createElement('div');

    label.textContent = 'Project Name';
    label.setAttribute("for","title");
    input.setAttribute("id","title");

    addButton.textContent    = 'Add';
    cancelButton.textContent = 'Cancel';

    div.appendChild(cancelButton);
    div.appendChild(addButton);

    form.appendChild(label);
    form.appendChild(input);

    dialog.classList.add('project-dialog');
    dialog.appendChild(form);

    return dialog;
}

export { projectDialog };




