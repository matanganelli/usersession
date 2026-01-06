// ===== Estado global mínimo =====
let isLoggedIn = false;

// ===== Função de login =====
function login() {
  const user = {
    name: "Maria",
    role: "user"
  };

  isLoggedIn = true;
  console.log("authenticated user:", user.name);
}

// ===== Função de ação protegida =====
function doAction() {
  if (!isLoggedIn) {
    console.log("Denied. Login in.");
    return;
  }

  const action = "Create Post";
  console.log("Ação executada:", action);
}

// ===== Função de logout =====
function logout() {
  isLoggedIn = false;
  console.log("Logout");
}

// ===== Eventos =====
document.getElementById("login").addEventListener("click", login);
document.getElementById("action").addEventListener("click", doAction);
document.getElementById("logout").addEventListener("click", logout);
