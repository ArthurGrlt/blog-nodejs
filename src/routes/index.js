const { Router } = require("express");

module.exports = function () {
  const app = Router();
  app.get("/", (req, res) => {
    res.render("index");
  });

  app.get("/post", (req, res) => {
    res.render("show");
  });

  return app;
};
