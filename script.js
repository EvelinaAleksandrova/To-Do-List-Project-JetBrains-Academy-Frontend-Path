let counterID = 3;
function addTaskToUL() {
    counterID++;
    let content = document.getElementById("input-task").value;
    let newLi = document.createElement("li");
    newLi.innerHTML = `
                <input type="checkbox" class="check">
                <span class="task">${content}</span>
                <button class="delete-btn" onclick="deleteTask(this)">X</button>
            `;
    if(content === ""){
        alert("EMPTY FIELD!\n\n" +
            "Write something you have to do and then" +
            " click on button (ADD TASK) to add it to the list.");
        return;
    }
    document.getElementById('task-list').appendChild(newLi);
    document.getElementById("input-task").value = "";
    console.log("Add task --" + content);

}

function deleteTask(obj) {
    console.log("Delete task");
    obj.parentNode.remove();
}


