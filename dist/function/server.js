const express = require("express");
const path = require("path");

const app = express();
const port = 3000;
const distDir = path.join(__dirname, "..");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(distDir, "index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(distDir, "index.html"));
});

const allUsers = [];

app.get("/getAllusers", (req, res) => {
  res.json(allUsers);
});

app.post("/signup", (req, res) => {
  const { username, password } = req.body || {};

  if (!username || !password) {
    return res.status(400).send("Username and password are required");
  }

  allUsers.push({ username, password });

  if (username === "admin" && password === "12345") {
    return res.redirect("/dashboard");
  }

  return res.redirect("/login?error=1");
});

app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(distDir, "dashboard.html"));
});

app.get("/logout", (req, res) => {
  res.redirect("/");
});

app.listen(port, () => {
  console.log("http://localhost:3000");
});

export const handlen = ServerlessHttp(app)