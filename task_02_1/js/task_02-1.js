

var globel = 1000;
var globelTimer = null;
function numberTotime(number){
	var d=0;
	var y=0;
	var h=0;
	var m=0;
	var s=0;
	if(number<3600){
		m = Math.floor(number/60);
		s = number%60;
	}else if(number<3600*24){
		h = Math.floor(number/3600);
		m = Math.floor(number%3600/60);
		s = Math.floor(number%3600%60);
	}else if(number<3600*24*356){
		d = Math.floor(number/86400);
		h = Math.floor(number%86400/3600);
		m = Math.floor(number%86400%3600/60);
		s = Math.floor(number%86400%3600%60);
	}else{
		y = Math.floor(number/30758400);
		d = Math.floor(number%(86400*356)/86400);
		h = Math.floor(number%(86400*356)%86400/3600);
		m = Math.floor(number%(86400*356)%86400%3600/60);
		s = Math.floor(number%(86400*356)%86400%3600%60);
	}
	console.log("y:"+y+"-d:"+d+'-h:'+h+'-m:'+m+'-s:'+s);
	return	"y:"+y+"-d:"+d+'-h:'+h+'-m:'+m+'-s:'+s;
}

function terTime(time){
	return  Date.parse(new Date(time));
}

function star(endtime){
	if(globelTimer==null){

		globel = endtime;
	 	globelTimer = window.setInterval("sub()",1000);
	}
}
function sub(){
	globel--;
	var showtime = numberTotime(globel);
	$("#resulte").innerHTML = showtime;
}
function timer(time){

	var s = terTime(time);
	var now = Date.parse(new Date());
	s = (s-now)/1000;
	console.log(s);
	star(s);
	// var t = window.setInterval("sub()",1000);
	//去掉定时器
	// window.clearInterval(t1);
}


function setTime(){
	var endtime = $("#end").value;
	if(endtime){
		timer(endtime);
	}else{
		console.log("time is null");
	}
}
function endTime(){
	window.clearInterval(globelTimer);
	globelTimer=null;
	// console.log(globelTimer);
}


function setTimer(){
	$("#starButton").addEventListener('click',setTime,false);
	$("#endButton").addEventListener('click',endTime,false);
	// numberTotime(356);
	// star(344);
}