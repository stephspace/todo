import './styles.css';

function TodoUI(){
    const body = document.querySelector('body');
    const header = document.createElement('header');

    const bodyContent = document.createElement('div');

    const sideBar = document.createElement('div');
    const content = document.createElement('div');

    sideBar.textContent = 'Test';
    content.textContent = 'Test';

    sideBar.classList.add('sidebar');
    content.classList.add('content');
    bodyContent.classList.add('body-content');

    header.textContent = 'Todo List';
    body.append(header);

    bodyContent.appendChild(sideBar);
    bodyContent.appendChild(content);


    body.appendChild(bodyContent);

    
}

export { TodoUI };