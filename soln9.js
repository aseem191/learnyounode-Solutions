var http = require('http');
var bl = require('bl');
var done2 = false;
var done3 = false;
var done4 = false;
var str2 = "";
var str3 = "";
var str4 = "";


http.get(process.argv[2], function yeet(response){
	//response.setEncoding("utf8")
	
	var dstr = "";

	response.pipe(bl(function (err, dataa) { 
		str2 += dataa.toString();
			
	}))

	response.on("end", function(){
		done2 = true;
		if(done2 == true && done3 == true && done4 == true){
			console.log(str2);
			console.log(str3);
			console.log(str4);
		}
	})
})


http.get(process.argv[3], function yeet(response){
	//response.setEncoding("utf8")
	
	var dstr = "";
	response.on("data", function (data) { 
		//console.log(data);
	})

	response.pipe(bl(function (err, dataa) { 
		str3 += dataa.toString();
			
	}))

	response.on("end", function(){
		done3 = true;
		if(done2 == true && done3 == true && done4 == true){
			console.log(str2);
			console.log(str3);
			console.log(str4);
		}
	})
})


http.get(process.argv[4], function yeet(response){
	//response.setEncoding("utf8")
	
	var dstr = "";
	response.on("data", function (data) { 
		//console.log(data);
	})

	response.pipe(bl(function (err, dataa) { 
		str4 += dataa.toString();
			
	}))

	response.on("end", function(){
		done4 = true;
		if(done2 == true && done3 == true && done4 == true){
			console.log(str2);
			console.log(str3);
			console.log(str4);
		}
	})
})