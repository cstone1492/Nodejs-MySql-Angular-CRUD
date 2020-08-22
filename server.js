const express = require("express");
//builds rest apis
const bodyParser = require("body-parser");
//helps to parse the request and create the req.body object
const cors = require("cors");
//provides Express middleware to enable CORS with various options


//create Express app
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

//add cors middleware
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


const db = require("./server/models");
db.sequelize.sync();
// drop the table if it already exists
 db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
 });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Caroline's application." });
});

require("./server/routes/tutorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

//for dropping existing tables and re-syncing the database
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });