var app = require("express")();
var server = require("http").createServer(app);
var io = require("socket.io").listen(server);

server.listen(8080);

app.get("/", function (req, res) { res.sendfile(__dirname + "/index.html"); });
app.get("/client.js", function (req, res) { res.sendfile(__dirname + "/client.js"); });
app.get("/render.js", function (req, res) { res.sendfile(__dirname + "/render.js"); });
app.get("/images/Placebutton.png", function (req, res) { res.sendfile(__dirname + "/images/Placebutton.png"); });
app.get("/images/Attackbutton.png", function (req, res) { res.sendfile(__dirname + "/images/Attackbutton.png"); });
app.get("/styles.css", function (req, res) { res.sendfile(__dirname + "/styles.css"); });
app.get("/order.js", function (req, res) { res.sendfile(__dirname + "/order.js"); });

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