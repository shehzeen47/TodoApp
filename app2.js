// console.log(firebase);
var list = document.getElementById("tasklist")
firebase
  .database()
  .ref("todos")
  .on("child_added", function (data) {
    // console.log(data.val());

    var newTask = document.createElement("li");
    var taskList = document.getElementById("taskList");
    taskList.appendChild(newTask);
    newTask.textContent = document.getElementById("inputTask").value;
    document.getElementById("inputTask").value = "";
    deleteTask(newTask);

    var EditBtnElement = document.createElement("button");
    var EditBtnTxt = document.createTextNode("Edit");
    EditBtnElement.appendChild(EditBtnTxt);
    EditBtnElement.setAttribute("onclick", "EditSingleTodo(this)");
    newTask.appendChild(EditBtnElement);
    
  });

function addTask() {
  var input = document.getElementById("inputTask");
  var database = firebase.database().ref("todos");
  var key = database.push().key;

  var todo = {
    value: input.value,
    key: key,
  };

  database.child(key).set(todo);

  // if (input.value) {
  //   var newTask = document.createElement("li");
  //   var taskList = document.getElementById("taskList");
  //   taskList.appendChild(newTask);
  //   newTask.textContent = document.getElementById("inputTask").value;
  //   document.getElementById("inputTask").value = "";
  //   deleteTask(newTask);

  //   var EditBtnElement = document.createElement("button");
  //   var EditBtnTxt = document.createTextNode("Edit");
  //   EditBtnElement.appendChild(EditBtnTxt);
  //   EditBtnElement.setAttribute("onclick", "EditSingleTodo(this)");
  //   newTask.appendChild(EditBtnElement);
  // } else {
  //   alert("Enter Items:)");
  // }

  input.value = "";
}

function deleteTask(newTask) {
  var deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  newTask.appendChild(deleteBtn);
  deleteBtn.onclick = function () {
    newTask.remove();
  };
}

function dltAllTodos() {
  taskList.innerHTML = "";
}

function EditSingleTodo(e) {
  var val = e.parentNode.firstChild.nodeValue;
  var upDateVal = prompt("Enter Updated Task Value", val);
  e.parentNode.firstChild.nodeValue = upDateVal;
}
