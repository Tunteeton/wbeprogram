
const message = document.getElementById('message');
const myButton = document.getElementById('my-button');
const heading = document.querySelector('h1');
const addButton = document.getElementById('add-data');
const textArea = document.getElementById('text-area');
const myList = document.getElementById('my-list');

myButton.addEventListener('click', () => {
  heading.textContent = "Moi maailma";
  console.log("Hello world");
});

addButton.addEventListener('click', () => {
  inputData();
});

function inputData() {
  const text = textArea.value;
  
  if (text === '') {
    alert('kirjoita jotain!');
    return;
  }
  
  const listItem = document.createElement('li');
  listItem.textContent = text;
  myList.appendChild(listItem);
  
  textArea.value = '';
  textArea.focus();
}