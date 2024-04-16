// API - Application Programming Interface
// JSON , Send Data , Res.json()

// SSR - Server Side Rendering
// SSR-Template , Send Template , res.rensder()
const axios = require("axios");
const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  axios.get("https://fakestoreapi.com/products").then((value) => {
    res.status(200).json(value.data);
  });
});

const products = [];
app.get("/api/:id", (req, res) => {
  console.log(req.params);
  axios.get("https://fakestoreapi.com/products").then((value) => {
    const arr = value.data.find((item) => item.id == req.params.id);
    res.json(arr);
  });
});

app.listen(3000);
