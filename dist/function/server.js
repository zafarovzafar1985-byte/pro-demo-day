import express from "express";

const app = express();

const bodyParser = require("path");

const port = 3000;

const __dirname = path.resolve();

app.use(bodyParser.json);

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req, res) => {
    res.sendFile(__dirname + "/index.html")
})

const allUsers=[];

app.get("/getAllusers", (req, res) => {
    res.json(allUsers)
})

app.get("/signup", (req, res) => {
    const {username,password} = req.body;
    
    const newUser = {username,password};

    allUsers.push(newUser);

    res.sendStatus(200,"Ma'lumotlar yuborildi")
})

app.post('/signup', (req, res) => {
    const { username, password } = req.body;


    if (username === 'admin' && password === '12345') {
    
        return res.redirect('/dashboard');
    } else {
   
        return res.redirect('/login?error=1');
    }
});

const path = require('path');

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'dashboard.html'));
});

app.listen(port,() => {
    console.log("http://localhost:3000")
})