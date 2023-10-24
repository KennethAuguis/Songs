var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listsong', function (req, res) {
   fs.readFile( __dirname + "/" + "songs.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})
var song = {
    "song6" : {
       "song" : "SOLO",
       "artist" : "Jennie",
       "genre" : "K-POP",
       "link": "https://www.youtube.com/watch?v=b73BI9eUkjM"
    }
    
 }
 
 app.post('/addsongs', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "songs.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["song6"] = song["song6"];
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })
 app.get('/:id', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "songs.json", 'utf8', function (err, data) {
       var songs = JSON.parse( data );
       var song = songs["song" + req.params.id] 
       console.log( song );
       res.end( JSON.stringify(song));
    });
 })

 var id = 2;

app.delete('/deletesongs', function (req, res) {
   // First read existing song
   fs.readFile( __dirname + "/" + "songs.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["songs" + 2];
       
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

 

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})