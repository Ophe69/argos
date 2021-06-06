var express = require('express');
var router = express.Router();

var membersModel = require('../models/members')

/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */

router.post('/addMember', async function(req, res) {

  var existingMember = await membersModel.findOne({ memberName: req.body.memberName});
  var exist = false;
  var message = '';

  if(!existingMember){
    var newMember = new membersModel({
      memberName: req.body.memberName,
      memberDescription: req.body.memberDescription,
    })
    var memberSaved = await newMember.save()
    //console.log('memberSaved:', memberSaved)
    exist = true;
    res.json({memberSaved, message: 'Bienvenue à bord!'});
  } else {
    res.json({message : 'Membre déjà enregistré!'});
  }

  
});


module.exports = router;
