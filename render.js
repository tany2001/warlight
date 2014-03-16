var canvas = document.getElementById("mainCanvas");
var Deployimage = document.getElementById("Deploy");
var context = canvas.getContext("2d");

canvas.width = screen.width - 60 - Deployimage.width;
canvas.height = screen.height - 200;
context.strokeRect(0, 0, canvas.width, canvas.height);


 Game.mouse = {};
 Game.selectedRegionId = -1;
 Game.Render.DrawRegion = function DrawRegion(current){
	
 	context.globalAlpha = 1;
	
 	if (Game.myself.id == current.owner) {
 		context.fillStyle = "green";
 	}else {
 		context.fillStyle = "red";
 	}
 	if (current.id == Game.selectedRegionId) {
 		context.globalAlpha = 0.7;
 	}
 	context.fillRect(current.pos.x,current.pos.y,current.size.x,current.size.y);
 } 
 Game.Render.DrawAllRegion = function DrawRegion(){
 	for (var i = 0 ; i < Game.regionList.length; i ++) {
 		Game.Render.DrawRegion (Game.regionList[i]);
 	}
 } 
 Game.Render.Draw = function Draw() {

 	context.strokeRect(0, 0, canvas.width, canvas.height);
 	Game.Render.DrawAllRegion();
	

 	requestAnimationFrame();
 }
 Game.squareCollision = function squareCollision (o1,o2) {
 	return o1.pos.x + o1.size.x > o2.pos.x && o1.pos.y + o1.size.y > o2.pos.y && o2.pos.x + o2.size.x > o1.pos.x && o2.pos.y + o2.size.y > o1.pos.y;
 }
 Game.FindRegionCollided = function FindRegionCollided (mouse){
 	for ( var i = 0 ; i < Game.regionList.length ; i ++ ) {
 		if (Game.squareCollision ( { pos: {x:mouse.x , y:mouse.y},size: {x : 0,y : 0} } , Game.regionList[i] ) ) {
 			return Game.regionList[i].id;
 		}
 	}
 	return -1;
 }
	requestAnimationFrame();
}
Game.squareCollision = function squareCollision (o1,o2) {
	return o1.pos.x + o1.size.x > o2.pos.x && o1.pos.y + o1.size.y > o2.pos.y && o2.pos.x + o2.size.x > o1.pos.x && o2.pos.y + o2.size.y > o1.pos.y;
}
Game.FindRegionCollided = function FindRegionCollided (mouse){
	for ( var i = 0 ; i < Game.regionList.length ; i ++ ) {
		if (Game.squareCollision ( { pos: {x:mouse.x , y:mouse.y},size: {x:0,y:0} } , Game.regionList[i] ) ) {
			return Game.regionList[i].id;
		}
	}
	return -1;
}
	
 window.addEventListener("mouseup", function (args) {
	
 	Game.mouse.x = args.x;
 	Game.mouse.y = args.y;
	
 	Game.selectedRegionId = Game.FindRegionCollided(Game.mouse);
	
	
 }, false);


 Game.Render.Draw();
