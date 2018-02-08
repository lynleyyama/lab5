var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	exports.addFriend = function (req,res){
		var name = req.query.name;
		var description = req.query.description;
		var image = "http://lorempixel.com/400/400/people/";
		var newJSON = {'name':name, 
						'description':description, 
						'image':image};
		console.log(newJSON);
		data.friends.push(newFriend);
		res.render('index',data);
	}
 }