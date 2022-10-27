const todoList = document.querySelector('#todo-list')

const state = {
  todos: []
}

// GET ALL THE TODO
function getTodoList() {
  const uri = 'http://localhost:3000/todos'
  console.log('test 2')
  // Get the Todo from Local Server
  fetch(uri)
    .then((response) => {
      return response.json()
    })
    .then((wholeList) => {
      state.todos = wholeList
    })
}

function renderTodoList() {
  console.log('test')
  getTodoList()

  const li = document.createElement('li')
  console.log(state)
  state.todos.forEach((item) => {
    console.log(item, 'hello5')
  })
}

renderTodoList()
