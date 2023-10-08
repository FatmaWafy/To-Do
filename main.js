let input = document.getElementById("input-box");
let button = document.getElementById("Add");
let listContainer = document.getElementById("list-container");
let msg = document.querySelector(".invailid-msg");

// get Data from LocalStorage
listContainer.innerHTML = localStorage.getItem("data");

// add event click on all lis that get from localstorage
let lis = listContainer.querySelectorAll("li");
for (let li of lis) {
  li.addEventListener("click", () => {
    if (li.classList.contains("checked")) {
      li.classList.remove("checked");
    } else {
      li.classList.add("checked");
    }
    SaveData();
  });
}

// add event click on all spans that get from localstorage
let spans = listContainer.querySelectorAll("span");
for (let span of spans) {
  span.addEventListener("click", () => {
    span.parentElement.remove();
    SaveData();
  });
}

function addTask() {
  if (input.value === "") {
    //show invalid msg
    msg.style.display = "block";
  } else {
    //create li, span
    let li = document.createElement("li");
    li.innerHTML = input.value;

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";

    li.appendChild(span);
    listContainer.appendChild(li);

    input.value = "";
    SaveData();

    // add event click on li to add or remove "checked"
    li.addEventListener("click", () => {
      if (li.classList.contains("checked")) {
        li.classList.remove("checked");
      } else {
        li.classList.add("checked");
      }
      SaveData();
    });
    //add event click on span to remove his parent "li"
    span.addEventListener("click", () => {
      span.parentElement.remove();
      SaveData();
    });

    //hide invalid msg
    msg.style.display = "none";
  }
}

// Save Data To LocalStorage
function SaveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

button.addEventListener("click", () => {
  addTask();
});

document.onkeyup = function (e) {
  if (e.key === "Enter") {
    addTask();
  }
};
