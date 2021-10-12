
"use strict";

let addTaskButton = document.querySelector('#add-task-button');
let removeButtons = document.querySelectorAll('.delete-btn');
let listTask = document.querySelector('#task-list');
let inputTask = document.querySelector('#input-task');

let toDoList = [

];

function loadLocalStorage() {
//  key is tasks
    if (localStorage.getItem("tasks")) {
        toDoList = JSON.parse(localStorage.getItem("tasks")) || [];
        showTasks();
    }
}

loadLocalStorage();


function showTasks() {

    let tasksTemplate = '';
    // aktyalni danni v masiva 
    toDoList.forEach(function(item, index) {

        document.getElementById("input-task").value = '';

        tasksTemplate += `
        <li>
            <input type="checkbox" class="check" onclick="checkedTask(${index})" ${item.checked ? 'checked' : ''}>
            <span class="task">${item.taskName}</span>
            <button class="delete-btn"  onclick="removeTask(${index})">x</button>
        </li>
        `;
    });

    listTask.innerHTML = tasksTemplate;
}

function updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(toDoList));
}

function removeTask(index) {

    toDoList.splice(index, 1);
    updateLocalStorage();
    showTasks();

    return this.parentNode.remove();
}
function addTask() {
//object
    let newTask = {
        taskName: inputTask.value,
        checked: false
    }
    //alert 
    if(inputTask.value === ""){
        alert("EMPTY FIELD!\n\n" +
            "Write something you have to do and then" +
            " click on button (ADD TASK) to add it to the list.");
        return;
    }

    if (inputTask.value !== "") {

        toDoList.push(newTask);
        showTasks();
        updateLocalStorage();
    }
}


function checkedTask(index) {
    toDoList[index].checked = !toDoList[index].checked;
    updateLocalStorage();
    showTasks();
}








