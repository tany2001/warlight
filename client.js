//var socket = io.connect("http://localhost");

//var nickname;
//while(nickname == undefined || nickname == "")

//socket.emit("login", {name: nickname});

var Game = {};
Game.regionList = [];
Game.players = [];
Game.Player = function ()
{
	this.name = "";
	this.orders = [];
	this.id = "";
}
Game.Region = function (px, py)
{
	this.neighbors = [];
	this.pos = {x: px, y: py};
	this.size = {x: 10, y: 10};
	this.owner = "";
	this.id = "";
}
/*
socket.on("news", function (data)
{
	console.log(data);
	socket.emit("my other event", { my: "data" });
});
*/