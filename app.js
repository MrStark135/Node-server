const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer(function(req, res)
{
	res.writeHead(200, { 'Content-Type': 'text/html' });
	
	const filePath = './index.html';
	fs.readFile(filePath, function(error, data)
	{
		if(error)
		{
			res.writeHead(404)
			res.write('Error while fetching the file ' + filePath);
		}
		else
		{
			res.write(data);
			res.end();
		}
	})
});

server.listen(port, function(error)
{
	if(error != undefined)
	{
		console.log(error);
	}
	else
	{
		console.log('Server is listening on port '+ port);
	}
});