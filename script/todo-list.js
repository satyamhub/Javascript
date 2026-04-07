const todoObject = [];



function handleTodoKeydown(event) {
  if (event.key == "Enter") {
    addTodo();
  }
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  //console.log(name);

  const dateInputElement = document.querySelector(".js-date-input");
  const date = dateInputElement.value;
  //console.log(date);

  if (name == "" || date == "") {
    alert("Fields Are Empty");
    return false;
  }
  todoObject.push({ name: name, date: date });
  //console.log(todoObject);

  inputElement.value = "";
  dateInputElement.value = "";
  displayTodo();
}

function displayTodo() {
  let todoListHTML = "";
  for (let i = 0; i < todoObject.length; i++) {
    todoListHTML += `
    <div>${todoObject[i].name}</div>
    <div>${todoObject[i].date}</div>
    <button onclick="todoObject.splice(${i}, 1);   displayTodo()" class="delete-todo-button">Delete</button>
    `;
  }
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}
