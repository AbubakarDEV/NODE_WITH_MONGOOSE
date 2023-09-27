const mongoose = require("mongoose");
const express = require("express");
const multer = require("multer");

const url = "mongodb://0.0.0.0:27017/e-comm?directConnection=true";
mongoose.connect(url);

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

const SaveDB = async () => {
  const ProductModel = mongoose.model("products", ProductSchema);
  let data = new ProductModel({
    name: "m8",
    price: 1000,
    brand: "Apple",
    category: "normal",
  });
  let result = await data.save();
  console.log("result", result);
};

const UpdateDB = async () => {
  const ProductModel = mongoose.model("products", ProductSchema);
  let data = await ProductModel.updateOne(
    {
      name: "m8",
    },
    { $set: { price: 40 } }
  );
  console.log("data", data);
};

const DeleteDB = async () => {
  const ProductModel = mongoose.model("products", ProductSchema);
  let data = await ProductModel.deleteOne({
    name: "m8",
  });
  console.log("data", data);
};

const FindDB = async () => {
  const ProductModel = mongoose.model("products", ProductSchema);
  let data = await ProductModel.find({
    name: "m8",
  });
  console.log("data", data);
};
