var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res) {
//   res.render('recipe', { title: 'Master Chef Recipes' });
// });

module.exports = router;

router.get('/recipe', function(req, res) {
    var db = req.db;
    var collection = [{ "_id" : 1, "username" : "masterchef", "email" : "masterchef@topazti.com" }];
    collection.find({},{},function(e,docs){
        res.render('recipeList', {
            "recipeList" : docs
        });
    });
});
