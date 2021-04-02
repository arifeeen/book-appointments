require('../config/config-db');


const express = require('express');
const app = express();
const bookRouter = require('../routers/book');




const port = process.env.PORT || 3000;

app.use(express.json());
app.use(bookRouter);





app.listen(port, () => {
    console.log("ëxpress server started successfully");
})



