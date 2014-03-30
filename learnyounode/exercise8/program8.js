var http = require('http');

var output = '';

http.get(process.argv[2], function (response) {
	response.setEncoding('utf-8');
	response.on('data', function (data) {
		output = output + data;
	});

	response.on('error', console.error);

	response.on('end', function(data) {
		console.log(output.length);
		console.log(output);
	});
});