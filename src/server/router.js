let express = require("express");
let router = express.Router();

router.get("/tests", (req, res) => {
  res.send("https://www.googleapis.com/gmail/v1/users/me/messages");
});

module.exports = router;
