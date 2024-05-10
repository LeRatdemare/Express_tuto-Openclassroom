const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Request received!");
  next(); // Pass the request to the next middleware function
});

app.use((req, res, next) => {
  res.status(200); // Set the status code of the response
  next();
});

app.use((req, res) => {
  res.json({ message: "Your request was successful!" });
});

module.exports = app; // Export the Express app object for use in other modules
