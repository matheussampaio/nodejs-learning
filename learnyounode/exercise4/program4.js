var fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', function (err, data2) {

	if (!err) {
		console.log(data2.split("\n").length - 1);
	}

});
