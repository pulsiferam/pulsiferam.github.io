function adjustCSS(){
	var w = window.outerWidth;
    var h = window.outerHeight;
	
	
	if(w <= 935){
		document.getElementById("topnav").style.marginTop = "5vh";
		
		document.getElementById("contentimg").style.cssFloat = "left";
		document.getElementById("contentimg").style.marginLeft = "25vw";
		document.getElementById("contentimg").style.width = "40vw";
		document.getElementById("dynamicImg").style.width = "40vw";
		
		document.getElementById("text").style.width = "65vw";
		
		document.getElementById("myImage").style.width = "65vw";
		
		document.getElementById("main").style.marginLeft = "5vw";
		document.getElementById("main").style.marginRight = "5vw";
		document.getElementById("main").style.height = "150em";
		
		document.getElementById("social").style.cssFloat = "left";
		document.getElementById("social").style.marginLeft = "12vw";
		document.getElementById("social").style.marginTop = "3vh";
		document.getElementById("social").style.width = "30vw";
		
		document.getElementById("gamelist").style.width = "35vw";
		document.getElementById("gamelist").style.marginLeft = "2.5vw";
		
		document.getElementById("about").style.width = "35vw";
		document.getElementById("about").style.marginLeft = "2.5vw";
		document.getElementById("about").style.marginTop = "15vw";
	}
	
	if(w <= 550){
		document.getElementById("gamelist").style.marginLeft = "5vw";
		document.getElementById("social").style.width = "65vw";
		document.getElementById("about").style.marginTop = "6vw";
		document.getElementById("main").style.height = "300vh";
	}
	
	if(w > 935){
		document.getElementById("topnav").style.marginTop = "10vh";
		document.getElementById("contentimg").style.cssFloat = "right";
		document.getElementById("contentimg").style.marginLeft = "0vw";
		document.getElementById("contentimg").style.width = "20vw";
		document.getElementById("dynamicImg").style.width = "18vw";
		
		document.getElementById("main").style.marginLeft = "10vw";
		document.getElementById("main").style.marginRight = "10vw";
		document.getElementById("main").style.height = "100em";
		
		document.getElementById("text").style.width = "40vw";
		
		document.getElementById("myImage").style.width = "40vw";
		
		document.getElementById("social").style.cssFloat = "right";
		document.getElementById("social").style.marginLeft = "0vw";
		document.getElementById("social").style.marginTop = "0vh";
		document.getElementById("social").style.width = "18vw";
		
		document.getElementById("myImage").style.width = "40vw";
		
		document.getElementById("gamelist").style.width = "15vw";
		document.getElementById("gamelist").style.marginLeft = "12vw";
		
		document.getElementById("about").style.width = "15vw";
		document.getElementById("about").style.marginLeft = "5vw";
		document.getElementById("about").style.marginTop = "3vh";
		
	}
	/*if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		//Adjusts the CSS of certain elements if the page is being loaded on a mobile device
		document.getElementById("topnav").style.marginTop = "5vh";
		
		document.getElementById("button1").style.cssFloat = "none";
		document.getElementById("button2").style.cssFloat = "none";
		document.getElementById("button3").style.cssFloat = "none";
		document.getElementById("button4").style.cssFloat = "none";
		document.getElementById("button5").style.cssFloat = "none";
		document.getElementById("button6").style.cssFloat = "none";
		document.getElementById("button7").style.cssFloat = "none";
		document.getElementById("button8").style.cssFloat = "none";
		document.getElementById("button9").style.cssFloat = "none";
		
		document.getElementById("button1").style.width = "4vw";
		document.getElementById("button2").style.width = "4vw";
		document.getElementById("button3").style.width = "4vw";
		document.getElementById("button4").style.width = "4vw";
		document.getElementById("button5").style.width = "4vw";
		document.getElementById("button6").style.width = "4vw";
		document.getElementById("button7").style.width = "4vw";
		document.getElementById("button8").style.width = "4vw";
		document.getElementById("button9").style.width = "4vw";
		document.getElementById("contentimg").style.display = 'none';
	}*/
}
var myVar = setInterval(changeImg, 5000);
var x = 0;
function changeImg(){
	x++;
	
	if(x > 4){x = 0;}
	
	if(x < 0){x = 4;}
	
	if(x == 0){
		document.getElementById("myImage").src="uniclash_code.jpg";
	}
	
	else if(x == 1){
		document.getElementById("myImage").src="kyril_static_spritesheet_larger.png";
	}
	
	else if(x == 2){
		document.getElementById("myImage").src="yellow.gif";
	}
	else if(x == 3){
		document.getElementById("myImage").src="green.gif";
	}
	else{
		document.getElementById("myImage").src="blue.gif";
	}
}