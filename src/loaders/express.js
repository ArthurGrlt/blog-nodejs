const express = require("express");
const path = require("path");
const routes = require("../routes");

module.exports = function (app) {
  app.use(express.static("public"));
  app.use(express.static(__dirname + "../../public"));
  app.set("views", path.resolve(__dirname, "../views"));
  app.use(routes());
};
