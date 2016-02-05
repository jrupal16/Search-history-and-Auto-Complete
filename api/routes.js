var superagent = require('superagent');


module.exports = function(app) {
	app.get('/api/:type', function (req, res) {
	var urln='http://api.tvmaze.com/search/'+req.params.type;
	
		superagent
			
			.get(urln)
			.query({ 
				q:req.query.showname,
				json: true })
			.end(function(err, response) {
				if (err) {
					return res.send(err);
				}else { 
					console.log(response);
					res.json(response.body);
				}
			});
			});

	app.get("/api/:type/:id",function(req,res){
		var urln="http://api.tvmaze.com/"+req.params.type+"/"+req.params.id;
		console.log(urln);

		superagent
		.get(urln)
		.query({
			embed:'cast',
			})
		.end(function(err,response){
			if(err){
				return res.send(err);
			}else{
				console.log('Send response for show');
				console.log(response.body);
				res.json(response.body);
			}
		})
	})

	}

