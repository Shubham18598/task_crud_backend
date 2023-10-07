const express = require('express');

const bodyParser = require('body-parser')

const cors =require('cors');

const app = express();

require('./Config/db')

const router = require('./Routes/router')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())
app.use(bodyParser.json())
app.use(router)

// The express. static() function is a built-in middleware function in Express. It serves static files and is based on serve-static. Syntax: express.static(root, [options]) Parameters: The root parameter describes the root directory from which to serve static assets

app.listen(8080, () => {
    console.log("server started")
})