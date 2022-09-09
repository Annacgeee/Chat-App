const express = require('express')

const config = require('./config/app')

const app = express()



const port = config.appPort

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
console.log("Hi"); 


