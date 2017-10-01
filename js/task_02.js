// window.onload = oneLine();
// // 

function filer(text){
	
	var arry = new Array();
	// var exp = "\w+\,";
	// var leg = new RegExp(exp);
	// console.log(leg);
	text = text.replace(/\s/g,"");
	var leg = new RegExp(/\w+(?=\,)/,'g');
	text = text.match(leg);
	if(check(text)){
		for(var i=0;i<text.length;i++){
			var flag = true;
			for(var z in arry){
				if(arry[z]==text[i]){
					flag = false;
				}
			}
			if(flag){
			arry.push(text[i]);
			}
		}
	}else{
		//emply
	}
	return arry;
}
function check(text){
	var flag = true;
	if(text instanceof Array){
		if(text.length>5){
		warning($("#warning"),'is too long');
		flag =  false;
		}
	}else{
		if(!text){
			warning($("#warning"),'is null');
			flag =  false;
		}	
	}
	console.log("true");
	return flag;
}
function warning(element,text){
	element.innerHTML = 'Warning!!!' + text;
}
function showR(){
	var war = $("#warning");
	var text = $("#text").value;
	if(!check(text)){
		return false;
	}
	text = filer(text);
	// check(text);
	$("#resulte").innerHTML =text;
}
function showR2(){
	var textarea = $("#textarea").value;
	textarea = filer(textarea);
	$("#resulte2").innerHTML =textarea;
}
//单行输入框
function oneLine(){
	var button =  $("#button");
	addEvent(button,'click',showR);
}
//多行输入框
function someLine(){
	var button2 = $("#button2");
	addEvent(button2,'click',showR2);
}
