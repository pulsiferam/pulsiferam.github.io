function adjustCSS(){
	var w = window.outerWidth;
    var h = window.outerHeight;
	
	if(w <= 935){
		document.getElementById("topnav").style.marginTop = "5vh";
		document.getElementById("button1").style.width = "4vw";
		document.getElementById("button2").style.width = "4vw";
		document.getElementById("button3").style.width = "4vw";
		document.getElementById("button4").style.width = "4vw";
		document.getElementById("button5").style.width = "4vw";
		document.getElementById("button6").style.width = "4vw";
		document.getElementById("button7").style.width = "4vw";
		document.getElementById("button8").style.width = "4vw";
		document.getElementById("button9").style.width = "4vw";
		
		document.getElementById("button1").style.fontSize = "1.3vw";
		document.getElementById("button2").style.fontSize = "1.3vw";
		document.getElementById("button3").style.fontSize = "1.3vw";
		document.getElementById("button4").style.fontSize = "1.3vw";
		document.getElementById("button5").style.fontSize = "1.3vw";
		document.getElementById("button6").style.fontSize = "1.3vw";
		document.getElementById("button7").style.fontSize = "1.3vw";
		document.getElementById("button8").style.fontSize = "1.3vw";
		document.getElementById("button9").style.fontSize = "1.3vw";
	}
	else if(w > 935){
		document.getElementById("topnav").style.marginTop = "10vh";
		document.getElementById("button1").style.width = "6vw";
		document.getElementById("button2").style.width = "6vw";
		document.getElementById("button3").style.width = "6vw";
		document.getElementById("button4").style.width = "6vw";
		document.getElementById("button5").style.width = "6vw";
		document.getElementById("button6").style.width = "6vw";
		document.getElementById("button7").style.width = "6vw";
		document.getElementById("button8").style.width = "6vw";
		document.getElementById("button9").style.width = "6vw";
		document.getElementById("img").style.width = "9vw";
		
		document.getElementById("button1").style.fontSize = "1vw";
		document.getElementById("button2").style.fontSize = "1vw";
		document.getElementById("button3").style.fontSize = "1vw";
		document.getElementById("button4").style.fontSize = "1vw";
		document.getElementById("button5").style.fontSize = "1vw";
		document.getElementById("button6").style.fontSize = "1vw";
		document.getElementById("button7").style.fontSize = "1vw";
		document.getElementById("button8").style.fontSize = "1vw";
		document.getElementById("button9").style.fontSize = "1vw";
	}
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		//Adjusts the CSS of certain elements if the page is being loaded on a mobile device
		document.getElementById("topnav").style.marginTop = "5vh";
		document.getElementById("button1").style.width = "4vw";
		document.getElementById("button2").style.width = "4vw";
		document.getElementById("button3").style.width = "4vw";
		document.getElementById("button4").style.width = "4vw";
		document.getElementById("button5").style.width = "4vw";
		document.getElementById("button6").style.width = "4vw";
		document.getElementById("button7").style.width = "4vw";
		document.getElementById("button8").style.width = "4vw";
		document.getElementById("button9").style.width = "4vw";
	}
}
