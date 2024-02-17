
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const product_routes = require("./routes/product");
app.use("/models",product_routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
