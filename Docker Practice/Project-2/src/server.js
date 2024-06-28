const express = require("express")
const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to my awesome app-2");
});

app.listen(3001, () => {
    console.log(`Server is running on PORT: 3001`);
});