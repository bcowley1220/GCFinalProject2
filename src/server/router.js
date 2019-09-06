let express = require("express");
let router = express.Router();

router.get("/tests", (req, res) => {
  res.send("https://www.googleapis.com/gmail/v1/users/me/messages");
});

// function listMessages(userId, query, callback) {
//   var getPageOfMessages = function(request, result) {
//     request.execute(function(resp) {
//       result = result.concat(resp.messages);
//       var nextPageToken = resp.nextPageToken;
//       if (nextPageToken) {
//         request = gapi.client.gmail.users.messages.list({
//           userId: userId,
//           pageToken: nextPageToken,
//           q: query
//         });
//         getPageOfMessages(request, result);
//       } else {
//         callback(result);
//       }
//     });
//   };
//   var initialRequest = gapi.client.gmail.users.messages.list({
//     userId: me,
//     q: query
//   });
//   getPageOfMessages(initialRequest, []);
// }

module.exports = router;
