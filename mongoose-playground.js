const { mongoose, Schema } = require("mongoose");

const Pizza = require("./models/Pizza.model");


mongoose.connect("mongodb://127.0.0.1:27017/pizza-restaurant")
    .then( (response) => {
        console.log(`Connected!  Database Name: ${response.connections[0].name}`);
 
        const newPizzaDetails = {
            title: "margarita", 
            price: 12,
            isVeggie: true,
            dough: "classic",
            ingredients: ["mozzarella", "tomato sauce", "basilicum"]
        }

        return Pizza.create(newPizzaDetails); // create a new document (a new pizza)
    })
    .then( (pizzaFromDB) => {

        console.log(`your first pizza was created...`);
        // console.log(pizzaFromDB);


        const newPizzasArr = [
            {title: "veggie", price: 15, isVeggie: true},
            {title: "seafood", price: 20},
        ]

        return Pizza.insertMany(newPizzasArr);
    })
    .then( (pizzasCreated) => {
        console.log(`number of pizzas created...${pizzasCreated.length}`);


        return Pizza.find();
        // return Pizza.find({isVeggie: true});
    })
    .then( (pizzasFromDB) => {
        console.log(`Number of pizzas currently in our DB: ${pizzasFromDB.length}`)

        // Model.findOneAndUpdate(filter, update [, options])
        return Pizza.findOneAndUpdate({title: "margarita"}, {price: 12.5}, { returnDocument: 'after' })
    })
    .then( () => {
        console.log("your pizza was updated");
    })
    .catch((err) => console.error("Error: ", err));

 