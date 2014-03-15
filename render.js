var canvas = document.getElementById("mainCanvas");
var context = canvas.getContext("2d");

game.mouse = {};
game.selectedRegionId = -1;

game.Render.DrawRegion = function DrawRegion(current){
	
	context.globalAlpha = 1;
	
	if (game.myself.id == current.owner) {
		context.fillStyle = "green";
	}else {
		context.fillStyle = "red";
	}
	if (current.id == game.selectedRegionId) {
		context.globalAlpha = 0.7;
	}
	context.fillRect(current.pos.x,current.pos.y,current.size.x,current.size.y);
} 
game.Render.DrawAllRegion = function DrawRegion(){
	for (var i = 0 ; i < game.regionList.length; i ++) {
		game.Render.DrawRegion (game.regionList[i]);
	}
} 
game.Render.Draw = function Draw() {

	context.strokeRect(0, 0, canvas.width, canvas.height);
	game.Render.DrawAllRegion();
	
	requestAnimationFrame();
}
game.squareCollision = function squareCollision (o1,o2) {
	return o1.pos.x + o1.size.x > o2.pos.x && o1.pos.y + o1.size.y > o2.pos.y && o2.pos.x + o2.size.x > o1.pos.x && o2.pos.y + o2.size.y > o1.pos.y;
}
game.FindRegionCollided = function FindRegionCollided (mouse){
	for ( var i = 0 ; i < game.regionList.length ; i ++ ) {
		if (game.squareCollision ( { pos: {x:mouse.x , y:mouse.y},size: {0,0} } , game.regionList[i] ) ) {
			return game.regionList[i].id;
		}
	}
	return -1;
}
	
window.addEventListener("mouseup", function (args) {
	
	game.mouse.x = args.x;
	game.mouse.y = args.y;
	
	game.selectedRegionId = game.FindRegionCollided(game.mouse);
	
	
}, false);


game.Render.Draw();