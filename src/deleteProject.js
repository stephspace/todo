function deleteProject(){
    //deletes the projects from the projects section and updates
    //those changes from the local storage
    document.addEventListener('click', (e) => {
        if(e.target.id === 'project-delete-button'){
            localStorage.removeItem(e.target.parentNode.parentNode.firstChild.textContent.replace("#",'').trim());
            e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
        }
    });
}

export { deleteProject };