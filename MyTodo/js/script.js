const form = document.getElementById('inputForm');
const todoInput = document.getElementById('todo-input');
const dataList = document.getElementById('dataList');
const savedData = JSON.parse(localStorage.getItem('userData') || '[]');

savedData.forEach(item => {
    addListItem(item);
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const userInput = todoInput.value.trim();
    if(userInput) {
        addListItem(userInput);
        savedData.push(userInput);
        localStorage.setItem('userData', JSON.stringify(savedData))
        todoInput.value = '';
    }
});

function addListItem(item) {
    const li = document.createElement('li');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '삭제';
    deleteBtn.className = 'delete';
    deleteBtn.addEventListener('click', function() {
        const index = savedData.indexOf(item);
        if (index > -1) {
            savedData.splice(index, 1);
            localStorage.setItem('userData', JSON.stringify(savedData));
            li.remove();
        }
    });

    const textNode = document.createTextNode(item);
    li.appendChild(textNode);
    li.appendChild(deleteBtn);
    dataList.appendChild(li);
}
