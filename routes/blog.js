var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var schema = require('../model/schema');
var database = require('../model/database');

/* GET all blog messages */
router.get('/get', function(req, res, next) {
  schema.Blog.find({}).exec(function (err, blogs) {
    if (err)
      return console.error(err);
    console.log("Load success: ", blogs);
    res.send(blogs);
  });

});

/* POST single blog post */
router.post('/post', function(req, res, next) {
    var instance = new schema.Blog(req.body);
/** Example post body:
  {
    "author": "Morten Mathiasen",
    "body": "Hello everyone"
  }
 **/
     instance.save(function (err, Blog) {
       result = err?err:Blog;
       res.send(result);
       return result;
     });
});

//export the router
module.exports = router;
