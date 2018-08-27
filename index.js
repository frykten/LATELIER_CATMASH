const express = require("express");
const cors = require("cors");
const app = express();
const request = require("request")
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'frykten04',
  database : 'catmash'
});

app.use(cors());

connection.connect();

function isTableEmpty () {
  new Promise(function(resolve, reject) {
    connection.query('SELECT * from catmash', (error, results, fields) => {
      if (error) throw error;

      resolve(results)
    });
  }).then((data) => {
    if (data.length === 0)
      fillTable();
    else console.log("Table is full already")
  });
}

function fillTable () {
  var url = "https://latelier.co/data/cats.json"

  new Promise(function(resolve, reject) {
    request({
        url: url,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            resolve(body.images)
        }
    })
  }).then((cats) => {
    cats.forEach((cat) => {
      connection.query('INSERT INTO catmash SET ?', cat, function (error, results, fields) {
        if (error) throw error;
        // Neat!
      });
    })
  });
}

isTableEmpty();

app.get("/list-of-cats", (req, res) => {
  const q = "SELECT * from catmash";
  connection.query(q, (err, results, fields) => {
    if (err) throw err;
    else res.send(results);
  });
});

app.listen(3001);