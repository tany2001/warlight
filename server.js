var app = require("express")();
var server = require("http").createServer(app);
var io = require("socket.io").listen(server);

server.listen(8080);

app.get("/", function (req, res) { res.sendfile(__dirname + "/index.html"); });
app.get("/client.js", function (req, res) { res.sendfile(__dirname + "/client.js"); });
app.get("/render.js", function (req, res) { res.sendfile(__dirname + "/render.js"); });

io.sockets.on("connection", function (socket)
{
	socket.emit("news", { hello: "world" });
	socket.on("my other event", function (data)
	{
		console.log(data);
	});
});