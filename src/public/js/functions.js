let button = document.getElementById('btn-like');
button.addEventListener('click', (event) => {

    fetch(`/images/${button.dataset.id}/like`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(
            {
            id_img: button.dataset.id
            }
        )
        })   
        .then(res => res.json())
        .then(data => {
        document.getElementById('likes-count').innerHTML = data.likes;
        });
        

});
let btnDelete = document.getElementById('btn-delete');
btnDelete.addEventListener('click', (event) => {

    if(confirm('¿are you sure you want remove this image?')){
        fetch(`/images/${btnDelete.dataset.id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(
                {
                id_img: btnDelete.dataset.id
                }
            )
            })   
            .then(res => res.json())
            .then(data => {
                location.reload();
                alert(data.msg+'¡¡ Image '+data.img +' deleted');
            //document.getElementById('likes-count').innerHTML = data.likes;
            });
    }
    
        

});

let btnCommentForm = document.getElementById('btn-toggle-comment');
let formComment = document.getElementById('formComment');
formComment.hidden = true;

btnCommentForm.addEventListener('click', (event) => {
    if (formComment.hidden){
        formComment.hidden = false;
    }else{
        formComment.hidden = true;
    }
});