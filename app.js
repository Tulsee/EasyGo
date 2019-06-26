const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const app = express();

//middlewar for handlebars
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

//set static folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running at port nbr ${PORT}`);
});
