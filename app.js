const express = require("express");
const app = express();

const sendRequest = app.get("/gadgets", (request, response) => {
  response.sendFile("./gadgets.html", { root: __dirname });
});
app.listen(3000);
module.exports = sendRequest;
