//Skapar upp server som lyssnar på specifik port.
const express = require('express');
const server = express(); //skapar upp applikation genom anropa konstruktorn på express.
const port = 3000; //port 3000 när vi sitter lokat och utv. Över 1024, port 80  får ej anv pga vi ej får binda vår applikation till. 
const routes = require('./routes');


 //statisk fil -->  levererar endast innehållet. Inget händer. 
 const static = express.static('public'); //foldern/mappen vi vill leveerera statiska filer ifrån. Komemr foldra under public mappen att hantera statiska filer..
 server.use(express.json()); // middleware, säger att vi vill anv json.
 server.use(static);//talar om för appen att detta ska anv. static här är variablen i rad 21.
 server.use('/', routes); // callback = routes -> den metod vi vill ska hantera endpointen(request)

  

server.get('/', (req, res) => { 
    res.send('h18donme@du.se');
});



//När routen definerad som ovan kan man säga till 
//express att lyssna på porten 
//pga ingen host angiven  drf kmr det vara local host. a.k.a 127.0.2.1
server.listen(port, () => {
    console.log(`Vår server lyssnar nu på http://127.0.0.1:${port}/`); //package.json rad 8 & 9 för att detta ska ske.
});


