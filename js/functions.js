function toggle(variable){
	window[variable] = !window[variable];
    document.getElementById(variable + "Checkbox").checked = window[variable];
}

function percentage(variable){
	window[variable] = window["base" + variable] * Number(document.getElementById(variable).value)/100;
}

function isNumber(n) {return /^-?[\d.]+(?:e-?\d+)?$/.test(n);}

function ClosestPointOnWall(x,y,wall){
	var dx=x-wall.x1;
	var dy=y-wall.y1;

	var dxx=wall.x2-wall.x1;
	var dyy=wall.y2-wall.y1;

	var t=(dx*dxx+dy*dyy)/(dxx*dxx+dyy*dyy);

	if(isNaN(t)){t=0;}

	var x3=wall.x1+dxx*t;
	var y3=wall.y1+dyy*t;

	if(t<0){x3=wall.x1;y3=wall.y1;}
	if(t>1){x3=wall.x2;y3=wall.y2;}

	return {x:x3, y:y3};
}