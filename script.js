var activateSlideshow = setInterval(changeImg, 3000);
var x = 0;
function changeImg(){
	x++;
	
	if(x > 4){x = 0;}
	
	if(x < 0){x = 4;}
	
	if(x == 0){document.getElementById("myImage").src="uniclash_code_slides.jpg";}
	
	else if(x == 1){document.getElementById("myImage").src="kyril_static_spritesheet_larger.png";}
	
	else if(x == 2){document.getElementById("myImage").src="uniclash_code_slides.jpg";}
	
	else if(x == 3){document.getElementById("myImage").src="kyril_static_spritesheet_larger.png";}
	
	else{document.getElementById("myImage").src="uniclash_code_slides.jpg";}
}

function adjustCSS(){
	var w = window.outerWidth;
    var h = window.outerHeight;
	
	//Adjust for small size webpage
	if(w <= 1022){
		//hideHeaderbar();
		displayMainSmall();
		displayContentImgSmall();
		displayAnnouncementSmall();
		displayTopnavSmall();
		displayLogoSmall();
		displaySlideshowSmall();
		displaySocialSmall();
		displayGamelistSmall();
		displayAboutSmall();
	}
	
	//Adjust for tiny/mobile size webpage
	if(w <= 575){
		//displayHeaderbar();
		displayMainTiny();
		displayGamelistTiny();
		displaySocialTiny();
		//hideTopnav();	
	}
	
	//Adjust for normal size webpage
	if(w > 935){
		//hideHeaderbar();
		displayMainDefault();
		displayContentImgDefault();
		displayTopnavDefault();
		displayLogoDefault();
		displayAnnouncementDefault();
		displaySlideshowDefault();
		displaySocialDefault();
		displayGamelistDefault();
		displayAboutDefault();
	}
	
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		//Adjusts the CSS of certain elements if the page is being loaded on a mobile device
		document.getElementById("main").style.height = "500em";
	}
}


function hideHeaderbar(){
	document.getElementById("headerbar").style.display = "none";}
	
function hideTopnav(){
	document.getElementById("topnav").style.display = "none";}
	
function displayLogoSmall(){
	document.getElementById("logo").style.display = "block";
	document.getElementById("logo").style.width = "75px";}
	
function displayLogoDefault(){
	document.getElementById("logo").style.width = "9vw";}
	
function displayTopnavSmall(){
	document.getElementById("topnav").style.marginTop = "100px";
	document.getElementById("topnav").style.marginLeft = "1vw";
	document.getElementById("topnav").style.display = "block";
	document.getElementById("button4").innerHTML = "Blog";
	document.getElementById("button1").style.width = "8vw";
	document.getElementById("button2").style.width = "8vw";
	document.getElementById("button3").style.width = "8vw";
	document.getElementById("button4").style.width = "8vw";
	document.getElementById("button5").style.width = "8vw";
	document.getElementById("button6").style.width = "8vw";
	document.getElementById("button7").style.width = "8vw";
	document.getElementById("button8").style.width = "8vw";
	}

function displayTopnavDefault(){
	document.getElementById("topnav").style.marginTop = "10vh";
	document.getElementById("topnav").style.marginLeft = "12vw"
	document.getElementById("topnav").style.display = "block";
	document.getElementById("button4").innerHTML = "DevBlog";
	
	document.getElementById("button1").style.width = "6.5vw";
	document.getElementById("button2").style.width = "6.5vw";
	document.getElementById("button3").style.width = "6.5vw";
	document.getElementById("button4").style.width = "6.5vw";
	document.getElementById("button5").style.width = "6.5vw";
	document.getElementById("button6").style.width = "6.5vw";
	document.getElementById("button7").style.width = "6.5vw";
	document.getElementById("button8").style.width = "6.5vw";
	
	document.getElementById("button1").style.fontSize = "18px";
	document.getElementById("button2").style.fontSize = "18px";
	document.getElementById("button3").style.fontSize = "18px";
	document.getElementById("button4").style.fontSize = "18px";
	document.getElementById("button5").style.fontSize = "18px";
	document.getElementById("button6").style.fontSize = "18px";
	document.getElementById("button7").style.fontSize = "18px";
	document.getElementById("button8").style.fontSize = "18px";
	}

function displayContentImgSmall(){
	document.getElementById("contentimg").style.cssFloat = "left";
	document.getElementById("contentimg").style.marginLeft = "25vw";
	document.getElementById("contentimg").style.width = "40vw";
	document.getElementById("dynamicImg").style.width = "40vw";}
	
function displayContentImgDefault(){
	document.getElementById("contentimg").style.cssFloat = "right";
	document.getElementById("contentimg").style.marginLeft = "0vw";
	document.getElementById("contentimg").style.width = "20vw";
	document.getElementById("dynamicImg").style.width = "18vw";}
	
function displayMainSmall(){
	document.getElementById("main").style.marginLeft = "5vw";
	document.getElementById("main").style.marginRight = "5vw";
	document.getElementById("main").style.height = "150em";}
	
function displayMainTiny(){
	document.getElementById("main").style.height = "300em";}

function displayMainDefault(){
	document.getElementById("main").style.marginLeft = "10vw";
	document.getElementById("main").style.marginRight = "10vw";
	document.getElementById("main").style.height = "100em";}
	
function displayAnnouncementSmall(){
	document.getElementById("text").style.width = "65vw";}
	
function displayAnnouncementDefault(){
	document.getElementById("text").style.width = "40vw";}
	
function displaySlideshowSmall(){
	document.getElementById("myImage").style.width = "65vw";}
	
function displaySlideshowDefault(){
	document.getElementById("myImage").style.width = "40vw";}
	
function displaySocialDefault(){
	document.getElementById("social").style.cssFloat = "right";
	document.getElementById("social").style.marginLeft = "0vw";
	document.getElementById("social").style.marginTop = "0vh";
	document.getElementById("social").style.width = "18vw";}

function displaySocialSmall(){
	document.getElementById("social").style.cssFloat = "left";
	document.getElementById("social").style.marginLeft = "12vw";
	document.getElementById("social").style.marginTop = "3vh";
	document.getElementById("social").style.width = "30vw";}
	
function displaySocialTiny(){
	document.getElementById("social").style.width = "65vw";}
	
function displayGamelistDefault(){
	document.getElementById("gamelist").style.width = "15vw";
	document.getElementById("gamelist").style.marginLeft = "12vw";}
	
function displayGamelistSmall(){
	document.getElementById("gamelist").style.width = "35vw";
	document.getElementById("gamelist").style.marginLeft = "2.5vw";}
	
function displayGamelistTiny(){
	document.getElementById("gamelist").style.marginLeft = "5vw";}

function displayAboutDefault(){
	document.getElementById("about").style.width = "15vw";
	document.getElementById("about").style.marginLeft = "5vw";
	document.getElementById("about").style.marginTop = "3vh";}
	
function displayAboutSmall(){
	document.getElementById("about").style.width = "35vw";
	document.getElementById("about").style.marginLeft = "2.5vw";
	document.getElementById("about").style.marginTop = "15vw";}

function displayAboutTiny(){
	document.getElementById("about").style.marginTop = "6vw";}
	
function displayHeaderbar(){
	document.getElementById("headerbar").style.display = "block";
	document.getElementById("logo").style.display = "none";}
	
