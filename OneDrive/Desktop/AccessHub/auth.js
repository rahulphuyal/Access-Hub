// ===============================
// Create Default Admin Account
// ===============================

let users = JSON.parse(localStorage.getItem("users")) || [];

const adminExists = users.some(user => user.role === "admin");

if (!adminExists) {
    users.push({
        id: 1,
        fullname: "Administrator",
        email: "admin@example.com",
        password: "admin123",
        role: "admin"
    });

    localStorage.setItem("users", JSON.stringify(users));
}

// ===============================
// Register User
// ===============================

function registerUser() {

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (fullname === "" || email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find(user => user.email === email);

    if (exists) {
        alert("Email already registered.");
        return;
    }

    const newUser = {
        id: Date.now(),
        fullname: fullname,
        email: email,
        password: password,
        role: "user"
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful!");

    window.location.href = "index.html";
}

// ===============================
// Login User
// ===============================

function loginUser() {

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(function(u) {
        return u.email === email && u.password === password;
    });

    if (!user) {
        alert("Invalid Email or Password");
        return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user));

    if (user.role === "admin") {
        window.location.href = "admin.html";
    } else {
        window.location.href = "dashboard.html";
    }
}

// ===============================
// Logout
// ===============================

function logout() {

    localStorage.removeItem("loggedInUser");

    window.location.href = "index.html";
}

// ===============================
// Load User Dashboard
// ===============================

function loadDashboard() {

    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!user) {
        window.location.href = "index.html";
        return;
    }

    document.getElementById("welcome").innerHTML =
        "Welcome, " + user.fullname;
}

// ===============================
// Load Users (Admin Only)
// ===============================

function loadUsers() {

    const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!currentUser || currentUser.role !== "admin") {
        alert("Access Denied");
        window.location.href = "index.html";
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    let output = "";

    users.forEach(function(user) {

        output += `
            <tr>
                <td>${user.id}</td>
                <td>${user.fullname}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td>
                    ${
                        user.role === "admin"
                        ? "<strong>Admin</strong>"
                        : `<button onclick="deleteUser(${user.id})">Delete</button>`
                    }
                </td>
            </tr>
        `;
    });

    document.getElementById("userTable").innerHTML = output;
}

// ===============================
// Delete User
// ===============================

function deleteUser(id) {

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users = users.filter(function(user) {
        return user.id !== id;
    });

    localStorage.setItem("users", JSON.stringify(users));

    loadUsers();
}