var app = require("express")();
var server = require("http").createServer(app);
var io = require("socket.io").listen(server);

server.listen(8080);

app.get("/", function (req, res) { res.sendfile(__dirname + "/index.html"); });
app.get("/client.js", function (req, res) { res.sendfile(__dirname + "/client.js"); });
app.get("/render.js", function (req, res) { res.sendfile(__dirname + "/render.js"); });

var users = [];

function addUser(socket)
{
	return true;
}

function removeUser(socket)
{

}

io.sockets.on("connection", function (socket)
{
	socket.vars = {};
	socket.vars.logged = false;

	socket.on("login", function (data)
	{
		if(!socket.vars.logged)
			if(addUser(socket))
				socket.emit("logged", {text: "You logged OK!"});
	});
});