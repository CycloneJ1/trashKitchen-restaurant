const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const hbs = require("hbs");
const app = express();

const Pizza = require("./models/Pizza.model");


app.set("views", __dirname + "/views"); //tells our Express app where to look for our views
app.set("view engine", "hbs"); //sets HBS as the template engine

hbs.registerPartials(__dirname + "/views/partials"); //tell HBS which directory we use for partials

app.use(express.static('public')); // Make everything inside of public/ available

app.use(bodyParser.urlencoded({ extended: true }));


// Connect to DB
mongoose
    .connect('mongodb://127.0.0.1:27017/pizza-restaurant')
    .then(x => {
        console.log(`Connected! Database name: "${x.connections[0].name}"`);
    })
    .catch(err => console.error('Error... ', err));

    

// Home Page
app.get("/", (req, res, next) => {
    res.render("homepage");
});


// Contact Page
app.get("/contact", (req, res, next) => {
    res.render("contact");
})



app.get("/pizzas", (req, res, next) => {

    let maxPrice = req.query.maxPrice;
    maxPrice = Number(maxPrice); //convert to a number

    let filter = {};
    if(maxPrice) {
        filter = {price: {$lte: maxPrice}}
    }

    Pizza.find(filter)
        .then( pizzasArr => {

            const data = {
                listOfPizzas: pizzasArr
            }

            res.render("product-list", data)
        })
        .catch(e => console.log("Error getting list of pizzas from DB", e))
});



app.get("/pizzas/:pizzaName", (req, res, next) => {

    const nameOfThePizza = req.params.pizzaName;
    
    Pizza.findOne({title: nameOfThePizza})
        .then( pizzaDetails => {
            res.render("product", pizzaDetails);
        })
        .catch(e => console.log("Error getting pizza details from DB", e))
});



app.post("/login", (req, res, next) => {
    if (req.body.pwd === "ilovepizza") {
        res.send("welcome");
    } else {
        res.send("sorry, we don't like you");
    }
})
app.listen(3000, () => console.log('My first app listening on port 3000! '));