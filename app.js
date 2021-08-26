const express = require("express");
const app = express();
const port = 8001;

app.use(express.json());

const response = { msg: "success from mzone server!" };
app.get("/", (req, res) => {
  console.log("new incoming request...");
  console.log("sending response...", JSON.stringify(response));
  res.send(response);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
