var express = require("express");
var url = require("url");
var cors = require("cors");
var bodyParser = require("body-parser");
var request = require("request");
var app = express();
app.use(bodyParser());
app.use(cors());

// X-Auth-Token
// const token='bac360ba877a489c92483ea2043fc59c'
app.get("/soccer/today", function (req, res) {
  request(
    {
      headers: {
        "X-Auth-Token": "bac360ba877a489c92483ea2043fc59c",
      },
      uri: "https://api.football-data.org/v2/matches",
      method: "GET",
    },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        console.log(info);
        res.send(info);
      }
    }
  );
});
app.get("/basketball/today", function (req, res) {
  const requestUrl = url.parse(
    url.format({
      protocol: "https",
      hostname: "api-basketball.p.rapidapi.com",
      pathname: "/games",
      query: {
        date: /* new Date()., */ "2020-08-02",
        league: 12,
        season: "2019-2020",
      },
    })
  );
  request(
    {
      headers: {
        "x-rapidapi-host": "api-basketball.p.rapidapi.com",
        "x-rapidapi-key": "b07be98904mshfd9a210baff5402p1fa97bjsncad3da28cbaf",
        useQueryString: true,
      },
      uri: requestUrl,
      method: "GET",
    },
    function (error, response, body) {
      console.log("Basket");
      if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        console.log(body);
        console.log("lol");
        console.log(info);
        res.send(info);
      }
    }
  );
});
app.listen(8000);
console.log("The server is now running on port 3000.");
