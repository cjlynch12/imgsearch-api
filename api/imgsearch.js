var mongo = require('mongodb');
var express = require('express');
require('dotenv').config();
var app = express();
var GoogleImages = require('google-images');
const client = new GoogleImages(process.env.GOOG_CSE_ID,process.env.GOOG_APIKey);

module.exports = function (app) {
  
//generate search, return images, record search to mongodb
app.route('/search/:phrase')
  .get(function(req,res){
  mongo.MongoClient.connect(process.env.MLAB_URI, function(err,db){
    if (err) throw err;
    var collection = db.collection('imgSearchRecords');
    var string = req.params.phrase;
    var imgArr = [];
    var date = new Date();
    var pageNum = req.query.offset || 1;
    var genSearch = function(db, callback) {
          client.search(string,{page:pageNum}).then(images => {
              console.log(images.length);
              images.forEach(function(item){
              imgArr.push({url: item.url, description: item.description, pageUrl: item.parentPage})
          });
            collection.insert({phrase: string, timeStamp: date, offset: pageNum});
            res.json(imgArr);
            })
        }
    genSearch(db, function(){
      db.close();
      });
    });
  });  


// return search history
app.route('/history')
  .get(function(req,res){
  mongo.MongoClient.connect(process.env.MLAB_URI, function(err,db){
      if (err) throw err;
      var histArr=[];
      var collection = db.collection('imgSearchRecords');
      var lookup = function(db, callback) { 
      collection.find().toArray(function(err, doc){
        doc.forEach(function(item){
          histArr.push({searchTerm: item['phrase'], time: item['timeStamp'], page: item['offset']});
        });
      
      res.json(histArr);
      });
      
  };
      lookup(db,function() {
        
        db.close();
      }); 
    
  });
});
  
  

};