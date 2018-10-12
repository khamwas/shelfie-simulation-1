require("dotenv").config();
const express = require("express");
const massive = require("massive");
const { json } = require("body-parser");
const cors = require("cors");
const pc = require("./controllers/productCtrl");
const axios = require("axios");
const port = 3001;

var app = express();
app.use(cors());
app.use(json());
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.get("/api/shelfie/products", pc.getAll);
app.post("/api/shelfie/products", pc.addProduct);
app.put("/api/shelfie/products/:id", pc.editProduct);
app.delete("/api/shelfie/products/:id", pc.deleteProduct);

app.listen(port, () => {
  console.log(`port ${port} is listening...`);
});
