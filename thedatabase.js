const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

// Create a database promise object by connecting to database 
//https://www.sqlitetutorial.net/sqlite-nodejs/connect/
const dbPromise = (async () => {
    return open({
        filename: './thedatabase.sqlite',
        driver: sqlite3.Database
    });
})();


const doQueryCB = () => {
    open({
        filename: './thedatabase.sqlite',
        driver: sqlite3.Database
    }).then((con) => {
        con.all('SELECT email, id FROM users ORDER BY email ASC')
            .then((rows) => {
                console.log(rows);
            })
            .catch(error => {
                console.log('Something went wrong');
                console.log(error);
            });
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            console.log('Database complete');
        });
};

const doQuery = async () => {
    try {
        const db = await dbPromise; // väntar in rad 6
        const users = await db.all('SELECT email, id FROM users ORDER BY email ASC');
      
        console.log(users);
        return users;
    }
    catch(error) {
        throw new Error(error);
    }
};

doQuery();
(async () => {
    doQueryCB();
})();
