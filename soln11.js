var http = require('http')
var fs = require("fs")
var server = http.createServer(function (req, res) {
	var fstr = fs.createReadStream(process.argv[3]);
	fstr.pipe(res);
	
})

server.listen(process.argv[2])