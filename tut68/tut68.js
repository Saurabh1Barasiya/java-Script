// jab bhi ham kisi form par addEventListener apply karege. to page refresh ho jayega.

// if app cahte h ki page refresh na ho to app e.preventDefault() function ka use kero.

// ham yaha event.delegation ka use karege.

const todoList = document.querySelector('.todo-list');
const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");


todoList.addEventListener('click', function(event) {
    console.log(event.target);



    if (event.target.classList.contains("done")){
        event.target.parentNode.previousElementSibling.style.textDecoration= "line-through";
    }

    if (event.target.classList.contains("redo")){
        event.target.parentNode.previousElementSibling.style.textDecoration= "none";
    }

    if (event.target.classList.contains("remove")){
        const targetedLi = event.target.parentNode.parentNode;
        targetedLi.remove();
    }
    event.preventDefault();
});

todoForm.addEventListener("submit",(e)=>{
    
    const todoText = todoInput.value;
    const ele = document.createElement("li");
    ele.innerHTML = `
    <span class="text">${todoText}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn redo">Redo</button>
        <button class="todo-btn remove">Remove</button>
    </div>`;
    todoList.appendChild(ele);
    e.preventDefault();
});
