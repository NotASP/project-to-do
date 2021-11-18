document.getElementById('addToDo').addEventListener('click', function(e){
    if (document.getElementById('inputField').value != '') {
    //     let ul = document.createElement('p');
    // document.getElementById('toDoContainer').appendChild(ul);
    // ul.innerText = document.getElementById('inputField').value;
    // ul.id = 'ulId'
    // document.getElementById('inputField').value = "";
    } let ul = document.createElement('p');
    document.getElementById('toDoContainer').appendChild(ul);
    ul.innerText = document.getElementById('inputField').value;
    ul.id = 'ulId'
    document.getElementById('inputField').value = "";
    localStorage.setItem('toDoData', document.getElementById('toDoContainer').innerHTML)
    e.preventDefault
});

document.getElementById('toDoContainer').innerHTML = localStorage.getItem('toDoData')

let delButton = document.createElement('button');
document.getElementById('delContainer').appendChild(delButton);
delButton.innerText = 'Delete the first work';
delButton.className = 'delButton'
delButton.addEventListener('click', function (){
    document.getElementById('ulId').remove()
    localStorage.setItem('toDoData', document.getElementById('toDoContainer').innerHTML)
});