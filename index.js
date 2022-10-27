const todoList = document.querySelector('#todo-list')
const titleInput = document.querySelector('#title-input')
const submitButton = document.querySelector('#submit-button')

const state = {
  todos: []
}

// GET ALL THE TODO
function getTodoList() {
  const uri = 'http://localhost:3000/todos'
  // Get the Todo from Local Server
  fetch(uri)
    .then((response) => {
      return response.json()
    })
    .then((wholeList) => {
        state.todos = wholeList
        renderTodo()
    })
}

// ADD A NEW TODO BASE ON THE INPUT
function addTodo() {
    const newTodoData = {
        "title": titleInput.value,
        "completed": false
    }
    const uri = "http://localhost:3000/todos"
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // Converts new todo data from Object to JSON
        body: JSON.stringify(newTodoData)
    }

    fetch(uri, options)
    .then((response) => {
        return response.json()
    })
    .then((newTodo) => {
        state.todos.push(newTodo)
        renderUsers();
    })


}




function renderTodo() {
    state.todos.forEach((todo) => {
        const li = document.createElement('li')
        li.innerText = todo.title
        todoList.appendChild(li)
    })
}

getTodoList()
