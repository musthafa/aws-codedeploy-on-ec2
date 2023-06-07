const express = require("express");
const server = express();
const port = 3000;
server.get("/", (req, res) => {
  res.send("<h4>Demo of CI/CD");
});
server.listen(port, () => {
  console.log(`server started listening on the port:${[port]}`);
});
