

array = "aaa aab aac aad aaf abd aad eer abb abac abbbd cd ca ce ef ef";
// console.log(array["a"]);
var input = $("#input");
var contae = $("#contae");

function addLi(para,text){
	var li = document.createElement("li");
	var t = document.createTextNode(text);
	li.appendChild(t);
	para.appendChild(li);
}



function reg(te,text){
	// console.log(te +"--"+ text);
	var rex = new RegExp(te+"\\w*","g");
	console.log(rex);
	var r = text.match(rex);
	return r;
}
// function toArray(text){
// 	var t = text.
// }

function clearLi(){
	var childNumber = contae.childNodes.length;
		for(var i=0;i<childNumber;i++){
				contae.removeChild(contae.childNodes[0]);
			}
}

function check(te){
	// onsole.log(text);
	var li = reg(te,array);
	clearLi();
	for(var p in li){
		addLi(contae,li[p]);
	}
	// for(var key in array){
	// 	console.log(key);
	// 	if(text==key){
	// 		console.log(key);
	// 		var a = reg(key,array[key]);
	// 		console.log(a[0]);
	// 	}else{
	// 		return false;
	// 	}
	// }
}
function flush(){
	var oU = document.getElementById("contae");
　　oU.onclick = function(ev){
　　　　var ev = ev || window.event;
　　　　var target = ev.target || ev.srcElement;
　　　　if(target.nodeName.toLowerCase() == 'li'){
// 　　　　　　　  alert(target.innerHTML);
// 　 　　　　　　	alert(123);
				input.value = target.innerHTML;
				contae.style.visibility = 'hidden';
　　　　}
　　}
}
function isEmpty(){
	if(!input.value){
		contae.style.visibility = 'hidden';
	}else{
	contae.style.visibility = 'visible';
	}
}

flush();
input.onfocus = function(){
	isEmpty();
}
input.oninput = function(){
	isEmpty();
	check(this.value);
}
input.onblur =function(){
	window.setTimeout("contae.style.visibility= 'hidden' ",100);
} 



// var oUl = document.getElementById("1");
// var aLi = oUl.getElementsByTagName('li');
//     for(var i=0;i<aLi.length;i++){
//         aLi[i].onclick = function(){
//             alert(123);
//         }
//     }
  // var oUl = document.getElementById("ul1");
  //  oUl.onclick = function(){
  //       alert(123);
  //   }



