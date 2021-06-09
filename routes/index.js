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
    var memberList = await membersModel.find();
    //console.log('memberList du back', memberList)
    //console.log('memberSaved:', memberSaved)
    exist = true;
    res.json({memberSaved, message: 'Bienvenue à bord!', memberList });
  } else {
    var memberList = await membersModel.find();
    res.json({message : 'Membre déjà enregistré!', memberList});
  }

  
});

router.get('/crewMembers', async (req, res) => {
  var memberList = await membersModel.find();
    console.log('memberList', memberList)
  res.json({memberList});
}); 


module.exports = router;
