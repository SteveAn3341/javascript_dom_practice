document.getElementById('change-text').addEventListener('click', function() {
    document.getElementById('main-heading').innerText = 'Heading Text changed!!!!!!';
});

 document.getElementById('add-item').addEventListener('click', function() {
   let newList = document.createElement("li");
   newList.innerText = "new list is created!!"
   document.getElementById('item-list').appendChild(newList);
});

document.getElementById('change-text').addEventListener('mouseover',function(){
    let listItem = document.querySelectorAll('#item-list li');
    listItem.forEach(function(item){
        item.style.color = "blue"});
} );    


document.addEventListener('dblclick', function(){
    let list = document.querySelectorAll('#item-list li');
    if (list.length > 0) {
      document.getElementById('item-list').removeChild(list[list.length - 1]);
    }
  });

document.getElementById('main-heading').addEventListener('mouseover', function(){
    let p = document.querySelector('.description');
    p.innerText = "mouseover paragragh!!!";
});







