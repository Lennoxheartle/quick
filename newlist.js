const myFruits = ['Apple', 'Banana', 
    'Orange', 'Kiwi'];
const ul = document.getElementById('myList');

function myNewList() {
    myFruits.forEach(fruit=>{
        const li = document.createElement('li');
        li.textContent = fruit;
        ul.appendChild(li);
    })
}