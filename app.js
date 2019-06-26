const express = require("express");
const exphbs  = require('express-handlebars');
const app = express();

//middlewar for handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');



const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running at port nbr ${PORT}`);
});
