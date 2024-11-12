var ulEle = document.getElementById("list");

function addTodo() {
  var input = document.getElementById("input");

  if (input.value) {
    // console.log(input.value);
    var liEle = document.createElement("li");
    var liTxt = document.createTextNode(input.value);
    liEle.appendChild(liTxt);

    // Delete Button
    var btnEle = document.createElement("button");
    var btnTxt = document.createTextNode("Delete");
    btnEle.appendChild(btnTxt);
    btnEle.setAttribute("onclick", "deleteSinglTodo(this)");
    liEle.appendChild(btnEle);

    // Edit Button
    var EditBtnElement = document.createElement("button");
    var EditBtnTxt = document.createTextNode("Edit");
    EditBtnElement.appendChild(EditBtnTxt);
    EditBtnElement.setAttribute("onclick", "EditSingleTodo(this)");
    liEle.appendChild(EditBtnElement);

    ulEle.appendChild(liEle);
    // console.log(ulEle)
    input.value = "";
  } else {
    alert("Enter items");
  }
}

function dltAllTodos() {
  ulEle.innerHTML = "";
}

function deleteSinglTodo(e) {
  console.log(e.parentNode.remove());
}

function EditSingleTodo(f) {
  var upDateVal = prompt("Enter Updated Task Value");
  upDateVal = f.parentNode.firstChild.nodeValue;
}
