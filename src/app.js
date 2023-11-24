const path = require ("path");

const express = require("express");

const app = express();

app.listen(3030, () => console.log("Mercado Liebre corriendo en: http://localhost:3030/"));


app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
}
)

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
}
)

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
}
)

/*MANEJO DE LOS DATOS*/ 
app.post("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
}
)

app.get("/home", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
}
)

app.use(express.static("public"));