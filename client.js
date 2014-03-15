var socket = io.connect("http://localhost");

var nickname;
while(nickname == undefined || nickname == "")
	nickname = prompt("Enter your username", "Sasho");

socket.on("news", function (data)
{
	console.log(data);
	socket.emit("my other event", { my: "data" });
});