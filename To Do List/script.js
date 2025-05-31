let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let filter = "all";

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const emptyText = document.getElementById("emptyText");
const counter = document.getElementById("counter");
const searchInput = document.getElementById("searchInput");

document.getElementById("dateDisplay").textContent =
    new Date().toLocaleDateString("fa-IR", {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });

taskInput.addEventListener("keypress", e => {
    if (e.key === "Enter") addTask();
});

searchInput.addEventListener("input", render);

function addTask() {
    const text = taskInput.value.trim();
    if (!text) {
        alert("لطفاً یک کار وارد کنید.");
        return;
    }

    tasks.push({ text, done: false });
    taskInput.value = "";
    save();
    render(true);
}

function deleteTask(index) {
    tasks.splice(index, 1);
    save();
    render();
}

function editTask(index) {
    const newText = prompt("ویرایش:", tasks[index].text);
    if (newText !== null) {
        tasks[index].text = newText.trim();
        save();
        render();
    }
}

function toggleDone(index) {
    tasks[index].done = !tasks[index].done;
    save();
    render();
}

function setFilter(f) {
    filter = f;
    document.querySelectorAll(".filters button").forEach(btn => btn.classList.remove("active"));
    document.querySelector(`.filters button[onclick*="${f}"]`).classList.add("active");
    render();
}

function clearTasks() {
    if (confirm("همه کارها حذف شوند؟")) {
        tasks = [];
        save();
        render();
    }
}

function render(highlightLast = false) {
    taskList.innerHTML = "";
    const keyword = searchInput.value.toLowerCase();
    let filtered = tasks.filter(t => t.text.toLowerCase().includes(keyword));

    if (filter === "done") filtered = filtered.filter(t => t.done);
    if (filter === "active") filtered = filtered.filter(t => !t.done);

    filtered.forEach((task, i) => {
        const li = document.createElement("li");
        if (task.done) li.classList.add("done");
        if (highlightLast && i === tasks.length - 1) li.classList.add("highlight");
        li.draggable = true;
        li.ondragstart = e => dragStart(e, i);
        li.ondrop = e => drop(e, i);
        li.ondragover = allowDrop;
        li.innerHTML = `
      <span onclick="toggleDone(${i})">${task.text}</span>
      <div class="actions">
        <button class="edit-btn" onclick="editTask(${i})">✏</button>
        <button class="del-btn" onclick="deleteTask(${i})">🗑</button>
      </div>
    `;
        taskList.appendChild(li);
    });

    emptyText.style.display = filtered.length === 0 ? "block" : "none";
    counter.textContent = `مجموع: ${tasks.length} | انجام شده: ${tasks.filter(t => t.done).length}`;
}

function save() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

let dragFrom = null;

function dragStart(e, index) {
    dragFrom = index;
}

function allowDrop(e) {
    e.preventDefault();
}

function drop(e, indexTo) {
    const item = tasks.splice(dragFrom, 1)[0];
    tasks.splice(indexTo, 0, item);
    save();
    render();
}

function toggleTheme() {
    const theme = document.body.getAttribute("data-theme");
    document.body.setAttribute("data-theme", theme === "dark" ? "light" : "dark");
}

render();
