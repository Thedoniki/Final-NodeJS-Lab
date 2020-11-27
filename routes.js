//Import Router from express to be able to define routes.
const routes = require('express').Router(); // kopplad till rad 25 i index.js filen
const { json } = require('express');
const dbQuerie = require('./thedatabase');


routes.get('/products', (req,res) => {

    const sql = "SELECT * FROM products ORDER BY name"
    dbQuerie.all(sql, [], (err, rows) => {
      if (err) {
        return console.error(err.message);
      }
      res.render("products", { model: rows });
    });
  });



routes.post('/addProduct', (req, res) => { //Endpoint för att hämta produkter

    const addProduct = req.body;

});
