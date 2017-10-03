function $(element){
	var a = document.querySelector(element);
	return a;
}


// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    // your implement
    element.addEventListener(event,listener,false);
    //IE
    // element.attachEvent(event,listener);
}
function removerEvent(element,event,listener){
	element.removeEventListener(event,listener,false);
}

// /事件代理/
// oU.onclick = function(ev){
// 　　　　var ev = ev || window.event;
// 　　　　var target = ev.target || ev.srcElement;
// 　　　　if(target.nodeName.toLowerCase() == 'li'){
// // 　　　　　　　  alert(target.innerHTML);
// // 　 　　　　　　	alert(123);
// 				input.value = target.innerHTML;
// 				contae.style.visibility = 'hidden';
// 　　　　}
// 　　　　　　}



// var delegate = function(client,clientMethod){
// 	return function(){return clientMethod.apply(client,arguments);}
// }
// var agentMethod = delegate(client,client.method)	
// agentMethod();
// function $.on(element,event,listener){
// 	addEvent(element,event,listener);
// }
// function $.un(element,event,listener){
// 	removerEvent(element,event,;listener);
// }
