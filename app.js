const express = require("express");
const app = express();


app.set("views", __dirname + "/views"); //tells our Express app where to look for our views
app.set("view engine", "hbs"); //sets HBS as the template engine


app.use(express.static('public')); // Make everything inside of public/ available



// app.get(path, code)


// Home Page
app.get("/", (req, res, next) => {
    res.render('homepage');
});


// Contact Page
app.get("/contact", (req, res, next) => {
    res.render('contact');
})


app.get("/pizzas/margarita", (req, res, next) => {
    // res.render(path, data);

    const dataMargarita = {
        title: 'Pizza Margarita',
        price: 12,
        recommendedDrink: 'beer',
        imageFile: 'pizzaMar.jpeg',
        ingredients: [
            {
                ingredientName: "mozzarella",
                calories: 400
            },
            {
                ingredientName: "tomato sauce",
                calories: 200
            },
            {
                ingredientName: "basilicum",
                calories: 30
            },
          ],
    };

    res.render("product", dataMargarita)
})


app.get("/pizzas/veggie", (req, res, next) => {
    const dataVeggie = {
        title: 'Veggie Pizza',
        price: 15,
        recommendedDrink: 'power smoothie',
        imageFile: 'pizzaVeg.jpeg',
        ingredients: [
            {
                ingredientName: "cherry tomatoes",
                calories: 400
            },
            {
                ingredientName: "basilicum",
                calories: 200
            },
            {
                ingredientName: "olives",
                calories: 30
            },
          ],
    }; 
    res.render("product", dataVeggie);
})


app.get("/pizzas/seafood", (req, res, next) => {
    const dataSeafood = {
        title: 'Seafood Pizza',
        price: 20,
        recommendedDrink: 'white wine',
        imageFile: 'pizzaSea.jpeg',
        ingredients: [
            {
                ingredientName: "",
                calories: 400
            },
            {
                ingredientName: "",
                calories: 200
            },
            {
                ingredientName: "",
                calories: 30
            },
          ],
    };
      
    res.render("product", dataSeafood);
})



app.listen(3000, () => console.log('My first app listening on port 3000! '));