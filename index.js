const todoList = document.querySelector("#todo-list")

const state = {
    todos: []
}

// GET ALL THE TODO
function getTodoList() {
    const uri = "http://localhost:3000/todos"

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
    getTodoList()

    const li = document.createElement("li")

    state.todos.forEach((item) => {
        console.log(item)
    })

}

renderTodoList()
