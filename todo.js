document.getElementById('add-task').addEventListener('click', function(){
    let li = document.createElement('li');
    li.innerText = ('newitem');
    let list = document.getElementById('todo-list').appendChild(li);
   
});


document.getElementById('remove-task').addEventListener('click',function(){
    let li = document.getElementById('todo-list');
    let task = li.lastElementChild;
    if(task){
        li.removeChild(task);
    }
});

document.getElementById('clear-list').addEventListener('click', function(){

 document.getElementById('todo-list').innerHTML = '';
});


document.getElementById('todo-list').addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    }
});





