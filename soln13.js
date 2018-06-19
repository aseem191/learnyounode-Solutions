var http = require("http")
var url = require('url')

var server = http.createServer(function(req, res){
	if(req.method == 'GET'){
		res.writeHead(200, { 'Content-Type': 'application/json' })
		var parsed = url.parse(req.url, true);
		if(parsed.pathname == '/api/parsetime'){
			var pdate = new Date(parsed.query.iso);
			var datejson = {
				hour: pdate.getHours(),
				minute: pdate.getMinutes(),
				second: pdate.getSeconds()
			}
			res.write(JSON.stringify(datejson))
			res.end()
		}
		if(parsed.pathname == '/api/unixtime'){
			var pdate = new Date(parsed.query.iso);
			var datejson = {
				unixtime: pdate.getTime()
			}
			res.write(JSON.stringify(datejson))
			res.end()
		}
	}
})

server.listen(process.argv[2])