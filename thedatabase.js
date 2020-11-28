const sqlite3 = require('sqlite3').verbose();
const { request, json } = require('express');
const { open } = require('sqlite');
const routes = require('./routes');

// Create a database promise object by connecting to database 
//https://www.sqlitetutorial.net/sqlite-nodejs/connect/
const dbPromise = (async () => {
    return open({
        filename: './thedatabase.sqlite',
        driver: sqlite3.Database
    });
})();



//get product method
const getProducts = async ()=>{
    try{
        
        const dbCon = await dbPromise;
        const result = await dbCon.all(" SELECT * FROM products ORDER BY id");
        return result;
    }
    catch (error)
    {
        console.log(error);
    }
};

const addProducts = async (data)=>{

    try{
        const dbCon = await dbPromise;
        const result = await dbCon.run("INSERT INTO products (name, description, price) VALUES (?,?,?)",[data.name, data.discription, data.price, data.id]);
        return result;
    }catch(error){
        console.log(error);
    }
}

//eftersom vi har inte database så kör vi den här Arrayen som ersätter som database.
const getUsers = async () => {
    try {
        const dbCon = await dbPromise;
        const user = await dbCon.all('SELECT * FROM users ORDER by firstname ASC');
        return user;
    }
    catch (err) {
        console.log(err);
        throw new Error('Något gick fel i databasen...');
    }
};




// mothoder vi skapar ropar vi genom routes file.
module.exports = {
    getUsers: getUsers,
    getProducts : getProducts,
    addProducts : addProducts

};

