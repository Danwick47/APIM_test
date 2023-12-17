const http = require('http');

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

server.listen(3000,'localhost', function(){
	console.log("Server is Listening at Port 3000!");
});
