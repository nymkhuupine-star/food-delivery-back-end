const express = require("express");
const cors = require("cors");
const connectToDB = require("./db");
const userRouter = require("./routes/userRouter");
const categoryRouter = require("./routes/categoryRouter");

const authenticationRouter = require("./routes/authentication");
// const foodRouter = require("./routes/foodRouter");

const app = express();
const PORT = process.env.PORT || 1000;

app.use(cors());
app.use(express.json());

connectToDB();

app.use("/user", userRouter);
app.use("/category", categoryRouter);
// app.use("/food", foodRouter);

app.use("/authentication", authenticationRouter);

app.listen(PORT, () => {
  console.log(`API beebeg on http://localhost:${PORT}`);
});
