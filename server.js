const express = require("express");
const app = express();
const website = "https://www.apptime.tech"

  app.get("/", (req, res) => {
        res.redirect(website)
  });
  app.get("/:id", (req, res) => {
    var id = req.params.id
        res.redirect(`${website}/${id}`)
  });
  app.get("/:id/:id2", (req, res) => {
    var id = req.params.id
    var id2 = req.params.id2
        res.redirect(`${website}/${id}/${id2}`)
  });
    app.get("/*", (req, res) => {
    var id = req.params.id
        res.redirect(website)
  });


const listener = app.listen(process.env.PORT, () => {
  console.log("Starting " + listener.address().port);
});
