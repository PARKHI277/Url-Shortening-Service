const express = require("express");
const mongoose = require("mongoose");
const shortid = require("shortid");
const Url = require("../models/Url");
const User = require("../models/User");
const atob = require("atob");
function checkUrlValidity(url) {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
}
exports.shortUrl = async (req, res) => {
  const { originalUrl } = req.body;
  const token = req.headers["authorization"];

  const dec = token.split(".")[1];
  const decode = JSON.parse(atob(dec));
  console.log(decode);
  // Check if the original URL is valid
  const isValidUrl = await checkUrlValidity(originalUrl);
  if (!isValidUrl) {
    return res.status(400).json({ error: "Invalid URL" });
  }

  // Generate a short URL using shortid
  const shortUrl = shortid.generate();

  // Save the original URL and short URL in the database
  const url = new Url({ originalUrl, shortUrl });
  await url.save();

  // adding urls in user schema
  await User.findByIdAndUpdate(
    decode._id,
    { $addToSet: { urls: shortUrl } },
    {
      upsert: true,
      new: true,
    }
  );

  return res.json(url);
};

exports.redirectUrl = async (req, res) => {
  const { shortUrl } = req.params;
  const url = await Url.findOne({ shortUrl });
  if (!url) {
    return res.status(404).json({ error: "Short URL not found" });
  }

  // Redirect the user to the original URL
  return res.redirect(url.originalUrl);
};
