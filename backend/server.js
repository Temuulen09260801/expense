const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method}:${req.originalUrl}`);
  next();
});

app.get("/user", (req, res) => {
  console.log("All users are read successfully");
  res.json({ message: "GET success" });
});

app.post("/user", (req, res) => {
  console.log("New user is created successfully");
});

app.put("/user", (req, res) => {
  console.log("User is updated successfully");
});

app.delete("/user", (req, res) => {
  console.log("User is deleted successfully");
});

app.listen(PORT, () => {
  console.log(`Сервер localhost:${PORT} дээр аслаа`);
});
