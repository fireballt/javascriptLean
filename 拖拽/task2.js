var content1 = $("#content1");
var content2 = $("#content2");
var box = $("#box");
var array1 = new Array();
var array2 = new Array();



// 获得包含li字节点的数组
function check(para){
	var arry = new Array();
	var childLength = para.childNodes.length;
	if(childLength>0){
		for(var i=0;i<childLength;i++){
			arry.push(para.childNodes[i]);
			
		}
	}
	// console.log("out");
	// for(var z in arry){
	// 	console.log(arry[z]);
	// }	
	return arry;

}


function show(){
	var childNumber1 = content1.childNodes.length;
	var childNumber2 = content2.childNodes.length;
	console.log(childNumber1+"-------"+childNumber2);
	for(var i=0;i<childNumber1;i++){
		console.log(content1.childNodes[i]);
	}
}

function clearLi(){
	var childNumber = contae.childNodes.length;
		for(var i=0;i<childNumber;i++){
				contae.removeChild(contae.childNodes[0]);
			}
}
function addLi(para,text){
	var li = document.createElement("li");
	var t = document.createTextNode(text);
	li.appendChild(t);
	para.appendChild(li);
}

function move(){

}
// function addClass(arry){
// 	var length = arry.length;
// 	for(var i=0;i<length;i++){
// 		arry[i].css({

// 		})
// 	}
// }
function flushUl(arry1,arry2){
	for(var i=0;i<arry1.length;i++){
		content1.appendChild(arry1[i]);
	}
	for(var i=0;i<arry2.length;i++){
		content2.appendChild(arry2[i]);
	}
}
function clone(element){
	var e = element.cloneNode(true);
	return e;
}
// function addClass(element){
// 	var e = element;
// 	e.css({
// 		position: 'absolute',
// 		top:'100px',
// 		background: '#ccc'
// 	});
// 	return e;
// }


function addClickListener(ul){
	ul.onmousedown = function(ev){
　　　　var ev = ev || window.event;
　　　　var target = ev.target || ev.srcElement;
　　　　if(target.nodeName.toLowerCase() == 'li'){
// 　　　　　　　  alert(target.innerHTML);
				var cli = clone(target);

				cli.style.position = 'absolute';
				cli.style.background = '#ccc';
				// console.log(target.offsetTop);
				cli.id = "cli";
				cli.style.left = (target.offsetLeft+40) + 'px';

				cli.style.top = target.offsetTop + 'px';
				// console.log(ev.clienX);
				// cli.left = ev.clienX;
				// cli.top = ev.clienY;
				box.appendChild(cli);
　　　　}
　　　　}
}

function moveLi(){
	box.onmouseup = function(){
	var cli = $("#cli");
		if(cli){
			box.removeChild($("#cli"));
		}
	}
	// box.onmousedown = function(){
	// 	if(cli){
	// 		console.log("ddddddd");
	// 		cli.css({
	// 			 'transition-timing-function': 'linear',
	// 	   		'transition-duration': 1000 + 'ms',
	// 	    	'transform': 'translate3d( ' + 1000 + 'px,0px,0px)' //设置页面X轴移动
	// 		})
	// 	}
	// }

}
function mousePosition(ev){
  if(ev.pageX || ev.pageY){//firefox、chrome等浏览器
   return {x:ev.pageX,y:ev.pageY};
  }
  return {// IE浏览器
   x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,
   y:ev.clientY + document.body.scrollTop - document.body.clientTop
  };
 }

var oldx = 0;
var oldy = 0;
 function mouseMove(ev){
  ev = ev || window.event;
  var mousePos = mousePosition(ev);
  var xChange = oldx-mousePos.x;
  var yChange = oldy-mousePos.y;
  console.log(xChange);

  if($("#cli")){
  	var cliz = $("#cli");
  	var clizx = cliz.offsetLeft;

  	cliz.style.left = cliz.offsetLeft + xChange + 'px';
  	// cliz.style.top  = mousePos.y + 'px';
  }
	  oldx = mousePos.x;
	  oldy = mousePos.y;
  // document.getElementById('y').innerHTML = mousePos.y;
 }

 document.onmousemove = mouseMove;


function mode(){
	var ulArray1 = check(content1);
	var ulArray2 = check(content2);
	flushUl(ulArray1,ulArray2);
	addClickListener(content1);
	addClickListener(content2);
	// window.setTimeout(moveLi,50);
	moveLi();
}

mode();
// startDrag($("#content2"),$("#content2"));
// content1.parentNode.appendChild(clone(content1));