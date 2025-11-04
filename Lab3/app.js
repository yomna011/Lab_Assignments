const addButton = document.querySelector('.addButton');
const inputElement = document.querySelector('.inputElement');
const list = document.querySelector('.todoitems');
const allBtn = document.querySelector('.all');
const activeBtn = document.querySelector('.active');
const completeBtn = document.querySelector('.complete');

let todoItemsArray = [];


addButton.addEventListener('click', addTodoItem);
inputElement.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTodoItem();
});

function addTodoItem() {
  const task = inputElement.value;
  if (task === '') return;
  todoItemsArray.push({ text: task, done: false });
  inputElement.value = '';
  render();
}

function render(filter = 'all') {
  list.innerHTML = '';

  const filtered = todoItemsArray.filter(item => {
    if (filter === 'active') return !item.done;
    if (filter === 'completed') return item.done;
    return true; 
  });

  filtered.forEach((item, index) => {
    const li = document.createElement('li');
    if (item.done) li.classList.add('completed');

    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = item.done;
    checkbox.classList.add('checkbox');
    checkbox.addEventListener('change', () => {
      item.done = checkbox.checked;
      render(filter);
    });

    
    const span = document.createElement('span');
    span.textContent = item.text;

    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.addEventListener('click', () => {
      todoItemsArray.splice(index, 1);
      render(filter);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}


allBtn.addEventListener('click', () => render('all'));
activeBtn.addEventListener('click', () => render('active'));
completeBtn.addEventListener('click', () => render('completed'));
