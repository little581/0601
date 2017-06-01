var count=0;			 //記錄字串位置
var content="你好，我是愛管閒事的...<br> 咳咳.....我是喬瑟夫不動產的負責人，也是今天的面試官，請多指教。<br>"
			+" 我看過你的履歷了，你是要應徵.....";
var content_1_1="嗯......波紋戰士啊，將會是個很辛苦的職業，我不確定你是否可以勝任。";
var content_1_2="......<br>看你一副茫然的樣子，就容我自我介紹吧！<br>我就是愛管閒事的史比特瓦根！<br>"
			+"就我史比個瓦根的判斷，你這個傢伙如假包換，不折不扣是那位邪惡的DIO的部下！<br>"	
			+"太危險了！<br>"
			+"看過無數面相的我感受到了壓倒性的力量，可惡，就讓我史比特瓦根親手解決你！<br>"
			+"........................................................................<br>"
			+"..........呼——呼呼———一切都結束了......<br>"
			+"然後——我史比特瓦根就這樣瀟灑的退場吧。";
var content_1_3="";

var optionIsChecked = false; //記錄使用者是否已經選曲選項
var slides = document.getElementsByClassName('slides');

//測試
var t1 = 3000;	//進入網頁後暫停時間
var t2 = 500;  //文字打印間隔

var choose=false;

//增加新對話框
setTimeout(function createComSay() {
	playSound();
    var para = document.createElement("P");
    var t = document.createTextNode("This is a paragraph.");
    para.appendChild(t);
    document.body.appendChild(para);
    document.getElementById("com").appendChild(para);
    type_write();
},t1);	


//增加文字
function type_write(){
 
 	//印出內容
	if(count<=content.length){
		//console.log(content[count]);
		document.getElementById('com').innerHTML=content.substring(0,count);
		count++;
		setTimeout("type_write()",180);
	}

	if(count === content.length){
		//訊息讀取完畢
		console.log(slides);
		slides[0].style.display = 'block';
		var para = document.createElement("B");
		var t = document.createTextNode("波紋戰士");
		para.appendChild(t);
		document.body.appendChild(para);
		document.getElementById("p1").appendChild(para);
		para.addEventListener('click', function(){
			console.log("你選擇了波紋戰士");
			playChoSound();
			optionDisappear();
			choose = true;
			clearContent();
			type_write2();
		});

		slides[1].style.display = 'block';
		var para2 = document.createElement("B");
		var t2 = document.createTextNode("吸血鬼");
		para2.appendChild(t2);
		document.body.appendChild(para2);
		document.getElementById("p2").appendChild(para2);
		para2.addEventListener('click', function(){
			console.log("你選擇了吸血鬼");
			playChoSound();
			optionDisappear();
			clearContent();
			type_write2();
		});


		slides[2].style.display = 'block';
		var para3 = document.createElement("B");
		var t3 = document.createTextNode("小天使");
		para3.appendChild(t3);
		document.body.appendChild(para3);
		document.getElementById("p3").appendChild(para3);
		para3.addEventListener('click', function(){
			console.log("你選擇了小天使");
			playChoSound();
			optionDisappear();
		});
		

	}
 }

//增加文字
function type_write2(){
 
 	//印出內容
 	if (choose === true) {
		if(count<=content_1_1.length){
			//console.log(content[count]);
			document.getElementById('com').innerHTML=content_1_1.substring(0,count);
			count++;
			setTimeout("type_write2()",180);
		}
 	}

 	if (choose === false) {
		if(count<=content_1_2.length){
			//console.log(content[count]);
			document.getElementById('com').innerHTML=content_1_2.substring(0,count);
			count++;
			setTimeout("type_write2()",180);
		} 		
 	}


}



function optionDisappear (){
	for (var i = 0; i<slides.length; i++) {
		console.log(i);
		slides[i].style.display = 'none';
	}
}

function clearContent(){
	console.log("清除內容");
    document.getElementById("com").innerHTML="";
	count = 0;
}

function playSound() {
	//播放聲音
	var sound = document.getElementById("audio");
	sound.play();
}

function playChoSound(){
	var sound = document.getElementById("audio2");
	sound.play();
}

