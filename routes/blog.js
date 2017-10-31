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

    console.log("Hallo 1");

    instance.save(function (err, Blog) {
        result = err?err:Blog;

        schema.Blog.find({}).sort({_id:-1}).skip(10).exec(function (err, blogs) {
            console.log("Hallo 2");
            if (err)
                return console.error(err);
            console.log("Loader success: ", blogs);
            blogs.forEach(function(blog){
                console.log("Loader success: ", blog);
                schema.Blog.findByIdAndRemove(blog._id).exec();
            });

            res.send(result);
        });

        return result;
    });
});

//export the router
module.exports = router;
