const express = require('express');
const router = express.Router();

let userModel = require('../models/user').UserModel;

/* GET users listing. */

// Get all users
router.get('/', function(req, res, next){

    userModel.find({}, (error, users) => {
        if (error){
            res.send('Error');
        }
        if (users != null) {
            res.json(users);
        }
        else{
            res.send('No User Found');
        }
    });
});

// Get user based on user id
router.get('/:userId', function(req, res, next){

    let userQuery  = userModel.where(
        {userId : req.params.userId} );

    userQuery.findOne( (error, user) => {

      if (error){
          res.send('Error');
      }

      if (user != null){
          res.json({
              username: user.username,
              first: user.first,
              last: user.last
          });
      }
      else{
        res.send('No User Found');
      }
    });
});



module.exports = router;
