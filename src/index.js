const express = require("express");

const app = express();

const port = 4567;

app.listen(port, () => console.log(`Server is listening on port : ${port}`));
