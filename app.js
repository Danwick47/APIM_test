const http = require('http');

const port = process.env.PORT || 3000

const requestListener = (req, res)=>{
console.log("Request is Incoming");
	
const responseData = {
    "name": "Daniel",
    "age": 29,
    "hobby": {
	"reading" : false,
	"gaming" : true,
	"sport" : "cricket"
    },
    "class" : ["Azure", "Management", "Database"]
}

const jsonContent = JSON.stringify(responseData);
res.end(jsonContent);
};

const server = http.createServer(requestListener);

server.listen(port,'localhost', function(){
	console.log(`Server is Listening at Port: ${port}` );
});
