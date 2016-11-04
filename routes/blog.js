var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var schema = require('../model/schema');
var database = require('../model/database');

/* GET blog. */
router.get('/get', function(req, res, next) {
    schema.Blog.findOne({}, function (err, blog) {
        if (err)
        {
            console.log(err);
            res.send(err);
        }
        res.send(blog);
    });
});

/* GET blog. */
router.post('/post', function(req, res, next) {
    var instance = new schema.Blog(req.body);
/*** Example post body:
 {"title":  "My best book",
         "author": "Morten Mathiasen",
         "body":   "Hello everyone",
         "comments": [ {"comment": "Not good blog post"} ],
         "hidden": false,
         "meta": {
             "votes": 5,
             "favs":  15
         }}
 ***/
     instance.save(function (err, Blog) {
     if (err)
     return console.error(err);
     console.log("Save success: ", Blog);
     });

    res.send('blog post');
});

//export the router
module.exports = router;
