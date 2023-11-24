const path = require ("path");

const express = require("express");

const app = express();

const port = process.env.PORT || 3030;
app.listen(port, () => console.log("Mercado Liebre corriendo en: ${port}"));


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