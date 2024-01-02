const express = require("express");
const userRouter = require("./routes/userRoute");

const app = express();

const port = 4567;
app.use("/users", userRouter);
app.listen(port, () => console.log(`Server is listening on port : ${port}`));
