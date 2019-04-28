function nav(content){
	if(document.getElementById("nav").style.width == "200px" && document.getElementById(content).style.display == "block"){
		closeNav();
	}
	else{
		openNav(content);
	}
}
function openNav(content){
	document.getElementById("nav").style.height = "300px";
	if(isMobile()){document.getElementById("nav").style.height = "320px";}
	document.getElementById("nav").style.width = "200px";

	if(isMobile() == false){
		document.getElementById("infoIcon").style.display = "block";
	}
	else{
		if(mobile.clickMode == 0){document.getElementById("ballIcon").style.display = "block";}
		else{document.getElementById("wallIcon").style.display = "block";}
		document.getElementById("undoIcon").style.display = "block";
		document.getElementById("slider").style.display = "block";
	}

	if(content == "settings"){
		document.getElementById("settings").style.display = "block";
		document.getElementById("resetIcon").style.display = "block";
		document.getElementById("info").style.display = "none";
	}
	if(content == "info"){
		document.getElementById("info").style.display = "block";
		document.getElementById("infoIcon").style.display = "block";
		document.getElementById("settings").style.display = "none";
		document.getElementById("resetIcon").style.display = "none";
	}
}
function closeNav() {
	document.getElementById("nav").style.height = "35px";
	document.getElementById("nav").style.width = "35px";
	document.getElementById("settings").style.display = "none";
	document.getElementById("resetIcon").style.display = "none";
	document.getElementById("info").style.display = "none";
	document.getElementById("infoIcon").style.display = "none";
	document.getElementById("ballIcon").style.display = "none";
	document.getElementById("wallIcon").style.display = "none";
	document.getElementById("undoIcon").style.display = "none";
	document.getElementById("slider").style.display = "none";
}

function reset(){
	if(document.getElementById("gravityCB").checked){toggle("gravity");}
	if(!document.getElementById("frictionCB").checked){toggle("friction");}
	if(!document.getElementById("collisionBallsCB").checked){toggle("collisionBalls");}
	if(!document.getElementById("collisionWallsCB").checked){toggle("collisionWalls");}
	if(!document.getElementById("collisionEdgesCB").checked){toggle("collisionEdges");}
	if(document.getElementById("wrapEdgesCB").checked){toggle("wrapEdges");}
	if(document.getElementById("trailCB").checked){toggle("trail");}
	if(document.getElementById("pausedCB").checked){toggle("paused");}
	if(document.getElementById("imageCB").checked){toggle("color", "#");}

	document.getElementById("gravityScale").value = 100; change("gravityScale", "%");
	document.getElementById("frictionScale").value = 100; change("frictionScale", "%");
	document.getElementById("trailLength").value = ""; change("trailLength", "#");
	document.getElementById("speed").value = 100; change("speed", "%");
	document.getElementById("redMin").value = 0; change("redMin", "#");
	document.getElementById("greenMin").value = 0; change("greenMin", "#");
	document.getElementById("blueMin").value = 0; change("blueMin", "#");
	document.getElementById("redMax").value = 250; change("redMax", "#");
	document.getElementById("greenMax").value = 250; change("greenMax", "#");
	document.getElementById("blueMax").value = 250; change("blueMax", "#");

	if(isMobile()){
		document.getElementById("slider").value = 20;
		
		clicks["scroll"] = {x:canvas.width/2, y:canvas.height/2};
        if(scrollTimer != 0){clearTimeout(scrollTimer);}
        scrollTimer = window.setTimeout("scrollStop()", 250);

        standardRadiusBalls = Number(document.getElementById("slider").value);

        mobile.clickMode = 0;
        document.getElementById("ballIcon").style.display = "block";
		document.getElementById("wallIcon").style.display = "none";

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        balls = [];
        walls = [];
	}
}