function adjustCSS(){
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
