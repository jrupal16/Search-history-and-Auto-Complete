 var express=require('express');
 var app=express();


app.use(express.static('./clients'));

require('./api/routes')(app);
 app.get('*',function(req,res){
 	res.sendFile('/clients/views/index.html',{root:__dirname});
 })

 app.listen(8903,function(){
 	
 	console.log("Server is running on port no : "+this.address().port)
 })