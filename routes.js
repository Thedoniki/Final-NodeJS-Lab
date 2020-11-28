//Import Router from express to be able to define routes.
const routes = require('express').Router(); // kopplad till rad 25 i index.js filen
const { getUser } = require('./thedatabase');
const dbService = require('./thedatabase');
const express = require('express');
routes.use(express.json()); // middleware, säger att vi vill anv json.


//några produkter
const products = [
    { name: 'product 1', id: 1},
    { name: 'product 2', id: 2}
];

// get all products
routes.get('/products', async (req, res)=>{
    try{
        const result = await dbService.getProducts();
        res.json(result);
    }
    catch(error)
    {
        console.log(error);
    }
});


// Föreläsning 1 54 min in ish.
/**
 * routes.post('/product/', (req, res) => {  //Endpoint för att lägga till produkter
    const data = req.body;
    
    
    const found = products.find((p) => {
        return p.id === data.id;
    });
    if(!found) {
        products.push(data);
        res.json({status: 'ok'});
    } 
    else {
        res.status(400)
            .send(`Product with id already exists`);
    }
});
 */

// get one product
//https://www.youtube.com/watch?v=pKd0Rpw7O48
routes.get('/product/:id', async (req, res)=>{
    var products = await dbService.getProducts();
    const product = products.find(p => p.id === parseInt(req.params.id))
    if(!product) res.status(404).send("not found");
    res.send(product);
});

routes.post('/product/', async (req, res) =>{
try{
    const product = {    
        name: req.body.name,
        description: req.body.description,
        price: req.body.price

    };
    var products = await dbService.addProducts(product);
}catch (error){
    console.log(errr)
}
   
    products.push(product);
    res.send(products);
});



// get all users
routes.get('/users/', async (req, res)=>{
    try{
        const result = await dbService.getUsers();
        res.json(result);
    }
    catch(error)
    {
        console.log(error);
    }
});

// get one user
//https://www.youtube.com/watch?v=pKd0Rpw7O48
routes.get('/user/:id', async (req, res)=>{
    var users = await dbService.getUsers();
    const user = users.find(u => u.id === parseInt(req.params.id))
    if(!user) res.status(404).send("not found");
    res.send(user);
});


module.exports = routes;