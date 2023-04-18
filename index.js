require("dotenv").config();

const database = require("./database/database");
const express = require("express");
const path = require("path");
const routes = require("./routes/routes");
database();
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(routes);

app.listen(port, () => {
  console.log(`Servidor rodanddo na porta ${port}`);
});
