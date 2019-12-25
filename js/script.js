function timeClock(){
	var d = new Date();
	var h = 30 * (d.getHours());
	var m = 6 * (d.getMinutes());
	var s = 6 * d.getSeconds();
	var hrs = document.querySelector(".hours");
	var min = document.querySelector(".minute");
	var sec = document.querySelector(".second");
	hrs.style.transform = "rotate(" + h + "deg)";
	min.style.transform  = "rotate(" + m + "deg)";
	sec.style.transform  = "rotate(" + s + "deg)";
}
timeClock();
setInterval(timeClock,1000);