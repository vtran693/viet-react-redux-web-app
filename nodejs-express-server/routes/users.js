const express = require('express');
const router = express.Router();

let UserModel = require('../models/user').UserModel;

/* GET users listing. */
router.get('/:userId', function(req, res, next){

    let userQuery  = UserModel.where(
        {userId : req.params.userId} );

    userQuery.findOne( (error, user) => {

      if (error){
          res.send('Error');
      }

      if (user != null){
          res.json({
              Username: user.username,
              First: user.first,
              Last: user.last
          });
      }
      else{
        res.send('No User Found');
      }
    });


});

module.exports = router;
