// window.onload = oneLine();
// // 




function filer(text){
	
	var arry = new Array();
	// var exp = "\w+\,";
	// var leg = new RegExp(exp);
	// console.log(leg);
	// text = text.replace(/\s/g,"");
	var leg = new RegExp(/(\w+(?=[\,\t\r\n\v\f\s]))|\w+\b/,'g');
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

var warText = null;

function check(text){
	var flag = true;
	if(text instanceof Array){
		if(text.length>10){
		warText = 'is too long';
		flag =  false;
		}
	}else{
		if(!text){
			warText = 'is null';
			flag =  false;
		}	
	}
	if(flag) warText = null;
	return flag;
}
function warning(element){
	if(warText!=null){
	element.innerHTML = 'Warning!!!' + warText;
	}else{
		element.innerHTML = '';
	}
}
function showR(){
	var war = $("#warning");
	var text = $("#text").value;
	if(!check(text)){
		
		warning(war);
		return false;
	}
	text = filer(text);
	warning(war);
	// check(text);


	$("#resulte").innerHTML =text;
}

//加入checkbox

function creatCheckBox(name){
	var lable = document.createElement("lable");
	var t = document.createTextNode(name);
	lable.setAttribute("for",name);
	var checkBox = document.createElement("input");
	checkBox.type = 'checkbox';
	checkBox.name = 'supper';
	checkBox.id = name;

	lable.appendChild(t);
	lable.appendChild(checkBox);
	$("#content").appendChild(lable);
	// $("#content").appendChild(checkBox);
}
function creatBoxs(textarea){
	var wordsNumber = textarea.length;
	var para = $("#content");
	if(para.innerHTML){
		var childNumber = para.childNodes.length;
		if(childNumber!=0){
			for(var i=0;i<childNumber;i++){
				para.removeChild(para.childNodes[0]);
			}
		}
	}
	if(textarea instanceof Array){
		if(textarea.length>0){
			for(var i in textarea){
				creatCheckBox(textarea[i]);
			}
		}
	}
}
function showR2(){
	var war2 = $("#warning2");
	var textarea = $("#textarea").value;
	if(!check(textarea)){
		warning(war2);
		return false;
	}
	textarea = filer(textarea);
	warning(war2);

	creatBoxs(textarea);
	
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
//