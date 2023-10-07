const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Import your database configuration and routes
require('./Config/db');
const router = require('./Routes/router');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Use your router for handling routes
app.use(router);

// Define a port variable to make it easier to change the port in the future
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
