var net = require("net")
var server = net.createServer(function listener(socket){
	var date = new Date();
	var month = +date.getMonth() + +1;
	var sendstr = date.getFullYear() + "-0" + month + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + "\n";
	socket.write(sendstr);
	socket.end();
})

server.listen(process.argv[2]);