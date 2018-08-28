const express = require("express");
const cors = require("cors");
const app = express();
let router = express.Router();
const request = require("request");
const bodyParser = require('body-parser');
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'frykten04',
  database : 'catmash'
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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

router.get("/list-of-cats", (req, res) => {
  const q = "SELECT * from catmash";
  connection.query(q, (err, results, fields) => {
    if (err) throw err;
    else res.send(results);
  });
});

router.get("/two-cats", (req, res) => {
  const q = "SELECT * FROM catmash ORDER BY RAND() LIMIT 2";
  connection.query(q, (err, results, fields) => {
    if (err) throw err;
    else res.send(results);
  });
});

router.patch("/update-cat-points", (req, res) => {
  const q = "UPDATE catmash SET elo_points = ? WHERE id = ?";
  const newPoints = req.body.catEloPoints;
  const id = req.body.catId;
  
  connection.query(q, [newPoints, id], (err, results, fields) => {
    if (err) throw err;
    else res.send(results);
  });
});

app.use('/', router);

app.listen(3001);