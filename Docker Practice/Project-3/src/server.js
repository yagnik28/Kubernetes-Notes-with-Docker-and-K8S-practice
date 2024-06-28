const express = require("express")
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to my awesome app-3");
});

app.listen(3002, () => {
    console.log(`Server is running on PORT: 3002`);
});