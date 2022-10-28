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
    title: titleInput.value,
    completed: false
  }
  const uri = 'http://localhost:3000/todos'
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
      renderTodo()
    })
}

// DELETE A TODO BASE OFF THE LIST
function deleteToDo(todo) {
  const uri = `http://localhost:3000/todos/${todo.id}`
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
    // delete todo data from Object to JSON
  }

  fetch(uri, options)
    .then((response) => {
      return response.json()
    })
    .then((newTodo) => {
      getTodoList()
      console.log(state)
    })
}

function renderTodo() {
  todoList.innerHTML = ''
  state.todos.forEach((todo) => {
    const li = document.createElement('li')
    li.innerText = todo.title
    todoList.appendChild(li)
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete if finished'
    todoList.appendChild(deleteButton)
    deleteButton.addEventListener('click', (event) => {
      event.preventDefault()
      deleteToDo(todo)
    })
  })
}
console.log(state)

getTodoList()
