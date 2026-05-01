const API = "http://localhost:5000/api";

function login() {
  fetch(API + "/auth/login", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      email: email.value,
      password: password.value
    })
  })
  .then(res => res.json())
  .then(data => {
    localStorage.setItem("token", data.token);
    window.location = "dashboard.html";
  });
}

function register() {
  fetch(API + "/auth/register", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      name: "User",
      email: email.value,
      password: password.value,
      role: "member"
    })
  }).then(() => alert("Registered! Now login"));
}

function getToken() {
  return localStorage.getItem("token");
}

function addTask() {
  fetch(API + "/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken()
    },
    body: JSON.stringify({ title: task.value })
  }).then(loadTasks);
}

function loadTasks() {
  fetch(API + "/tasks", {
    headers: { Authorization: getToken() }
  })
  .then(res => res.json())
  .then(showTasks);
}

function filterTasks(status) {
  fetch(API + "/tasks", {
    headers: { Authorization: getToken() }
  })
  .then(res => res.json())
  .then(data => {
    showTasks(data.filter(t => t.status === status));
  });
}

function showTasks(data) {
  tasks.innerHTML = data.map(t => `
    <div class="task-card">
      <h4>${t.title}</h4>
      <p>Status: ${t.status}</p>

      <button onclick="updateTask(${t.id}, 'Pending')">Pending</button>
      <button onclick="updateTask(${t.id}, 'In Progress')">In Progress</button>
      <button onclick="updateTask(${t.id}, 'Done')">Done</button>
    </div>
  `).join("");
}

function updateTask(id, status) {
  fetch(API + "/tasks/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken()
    },
    body: JSON.stringify({ status })
  }).then(loadTasks);
}

function createProject() {
  fetch(API + "/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken()
    },
    body: JSON.stringify({ name: projectName.value })
  });
}

if (window.location.pathname.includes("dashboard")) {
  loadTasks();
}