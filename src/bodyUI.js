import './styles.css';

function bodyUI(){
    const body        = document.querySelector('body');
    const bodyContent = document.createElement('div');
    const sideBar     = document.createElement('div');
    const content     = document.createElement('div');

    sideBar.classList.add('sidebar');
    content.classList.add('content');
    bodyContent.classList.add('body-content');

    content.textContent = 'My projects';

    bodyContent.appendChild(sideBar);
    bodyContent.appendChild(content);
    body.appendChild(bodyContent);   
}

export { bodyUI };