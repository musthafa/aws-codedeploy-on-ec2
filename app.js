const express = require("express");
const app = express();
const port = 3000;

//endpoints

app.get("/", (req, res) => {
  res.send(
    "<h1>CI/CD Demo App</h1> <h4>Message: Success</h4> <p>Version 1.0.0</p>"
  );
});

app.get("/list", (req, res) => {
  res.send([
    {
      productId: "101",
      price: 100,
    },
    {
      productId: "102",
      price: 150,
    },
  ]);
});

app.listen(port, () => {
  console.log(`Demo app is up and listening to port: ${port}`);
});
//some thing to be done
