function deleteProject(){
    document.addEventListener('click', (e) => {
        if(e.target.className === 'project-delete-btn'){
            localStorage.removeItem(e.target.parentNode.firstChild.textContent.
            replace("#",'').trim());
            e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        }
    });
}

export { deleteProject };