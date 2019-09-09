let express = require("express");
let cors = require("cors");
let app = express();
//Added in router
// let router = require("./router");
// let gmail = require("./gmail");

app.use(express.static(__dirname + "/dist"));
// app.use("/", router);
// app.use("/", gmail);
app.use(cors());
app.use(express.json());

let port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server is running on PORT: ${port}!`));
