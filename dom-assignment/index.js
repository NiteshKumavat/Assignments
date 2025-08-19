
document.getElementById("heading").addEventListener("click", function () {
  this.textContent = "Welcome to DOM World";
});

document.getElementById("addParaBtn").addEventListener("click", function () {
  let p = document.createElement("p");
  p.textContent = "New Content";
  document.getElementById("container").appendChild(p);
});


document.getElementById("hideBtn").addEventListener("click", function () {
  document.getElementById("myImage").style.display = "none";
});

document.getElementById("addItemBtn").addEventListener("click", function () {
  let li = document.createElement("li");
  li.textContent = "New Item";
  document.getElementById("myList").appendChild(li);
});


document.getElementById("deleteItemBtn").addEventListener("click", function () {
  let list = document.getElementById("myList");
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
});


document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("nameInput").value;
  document.getElementById("greeting").textContent = "Hello, " + name + "!";
});


document.getElementById("colorBtn").addEventListener("click", function () {
  let paras = document.querySelectorAll("p");
  paras.forEach(p => p.style.color = "green");
});
