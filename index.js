const express = require("express");
const logger = require("./logger");
const app = express();

app.get("/log", (req, res) => {
  logger.info("------------------Log api entry point------------------");

  for (let i = 0; i < 5; i++) {
    logger.info("Payment done for customer id: " + i);
  }

  logger.info("------------------END OF LOG API------------------");

  res.status(200).send("Response from logger api");
});

app.listen(5000, () => {
  console.log("App running on port 5000");
});
