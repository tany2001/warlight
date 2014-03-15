var canvas = document.getElementById("mainCanvas");
var Deployimage = document.getElementById("Deploy");
var context = canvas.getContext("2d");
canvas.width = screen.width - 10;
canvas.height = screen.height - Deployimage.height - 200;
context.strokeRect(0, 0, canvas.width, canvas.height);