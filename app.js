const express = require("express");
const app = express();


// Make everything inside of public/ available
app.use(express.static('public'));



// app.get(path, code)


// Home Page
app.get("/", (req, res, next) => {
    res.sendFile(__dirname + '/views/homepage.html');
});


// Contact Page
app.get("/contact", (req, res, next) => {
    res.sendFile(__dirname + '/views/contact.html');
})




app.listen(3000, () => console.log('My first app listening on port 3000! '));