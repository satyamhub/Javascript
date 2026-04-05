const todoaObject = [
  {
    name: "satyam",
  },
  {
    date: 19 / 8 / 2004,
  },
];

function handleTodoKeydown(event) {
  if (event.key == "Enter") {
    addTodo();
  }
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-date-input");
  const date = dateInputElement.value;

  if (name == "" || date == "") {
    alert("Fields Are Empty");
    return false;
  }
  todoList.push({ name: name, date: date });
  console.log(todoList);

  inputElement.value = "";
  dateInputElement.value = "";
  displayTodo();
}

function displayTodo() {
  let todoListHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    todoListHTML += `
    <p>
    ${todoList[i]} <button onclick="todoList.splice(${i}, 1);   displayTodo()">Delete</button>
    </p>
    `;
  }
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}
