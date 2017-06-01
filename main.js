
 var count=0;			 //記錄字串位置
 var btnCganged = false; //判斷按鈕是否點擊
 var conFinished = false;//判斷訊息是否讀取完畢
 var content="如同泡沫般華麗而夢幻的男人。<br>也如泡沫般稍縱即逝。<br>——————————2月27日";
 
 function type_write(){
 
 	//印出內容
	if(count<=content.length){
		//console.log(content[count]);
		document.getElementById('reply_comment').innerHTML=content.substring(0,count);
		count++;
		setTimeout("type_write()",200);
	}

	if(count === content.length){
		conFinished = true; 	//訊息讀取完畢
	}
 }
function playSound() {
	//播放聲音
	var sound = document.getElementById("audio");
	sound.play();
}


function toggleText(button_id) 
{//更改按鈕文字
	playSound();
   var el = document.getElementById('start');
   if (el.firstChild.data == "Start") 
   {
       el.firstChild.data = "BizarreAdventure ";
       btnCganged = true;
   }

}

function goNext()
{//跳頁
	if ( btnCganged === true && conFinished === true) {
		//前往第一章
		window.open("./character1.html","_self");
	}
}

 console.log("喔");