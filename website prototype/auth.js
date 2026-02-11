// SIGNUP
function register(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const location = document.getElementById("location").value;
  const password = document.getElementById("password").value;

  const user = { name, email, phone, location, password };
  localStorage.setItem("user", JSON.stringify(user));
  alert("Account created successfully!");
  window.location.href = "index.html";
}

// LOGIN
function login(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (storedUser && storedUser.email === email && storedUser.password === password) {
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid email or password");
  }
}

// LOGOUT
function logout() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}

// Update sidebar name dynamically
function updateSidebarName() {
  const user = JSON.parse(localStorage.getItem("user"));
  const nameEl = document.getElementById("sidebar-name");
  if (user && nameEl) {
    nameEl.textContent = `Hello, ${user.name}`;
  }
}
