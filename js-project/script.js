
const message = document.getElementById('message');
const myButton = document.getElementById('my-button');
const heading = document.querySelector('h1');
const Addbutton = document.getElementById('Add-data');
const userInput = document.getElementById('user-input');
const myList = document.getElementById('my-list');

myButton.addEventListener('click', () => {
  heading.textContent = "Moi maailma";
  console.log("Hello world");
});

Addbutton.addEventListener('click', () => {
  inputData();
});

function inputData() {
  const text = userInput.value;
  
  if (text === '') {
    alert('Please enter text!');
    return;
  }
  
  const listItem = document.createElement('li');
  listItem.textContent = text;
  myList.appendChild(listItem);
  
  userInput.value = '';
  userInput.focus();
}