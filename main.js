var time = 0;
var l = true;
function refresh() {
	t = setInterval(function(){
	time = time + 1;
	document.getElementById('time').innerHTML = String((time%600000)/60000 | 0) + String((time%60000)/6000 | 0) + ":" + String((time%6000)/1000 | 0) + String((time%1000)/100 | 0) + "." + String((time%100)/10 | 0) + time%10;
	},10)
}
function start() {
	refresh();
	document.getElementById('start').removeAttribute('onclick');
}
function stop() {
	clearInterval(t);
	document.getElementById('start').setAttribute('onclick', "start()");
}
function reset() {
	stop();
	time = 0;
	document.getElementById('time').innerHTML = String((time%600000)/60000 | 0) + String((time%60000)/6000 | 0) + ":" + String((time%6000)/1000 | 0) + String((time%1000)/100 | 0) + "." + String((time%100)/10 | 0) + time%10;
}
function like() {
	if (l) {
		document.getElementById('like').innerHTML = '<i class="heart icon"></i> Like';
		l = false;
	} else {
		document.getElementById('like').innerHTML = '<i class="heart outline icon"></i> Like';
		l = true;
	}
}