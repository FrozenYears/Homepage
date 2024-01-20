// 一言 | Hitokoto
function hitokoto() {
	fetch('https://v1.hitokoto.cn')
		.then(response => response.json())
		.then(data => {
		const hitokoto = document.querySelector('#hitokoto_text')
			hitokoto.href = `https://hitokoto.cn/?uuid=${data.uuid}`
			hitokoto.innerText = data.hitokoto
		})
		.catch(console.error)
}
// 计时器 | TimeCounter
var time = 0;
var l = true;
function refresh() {
	tInt = setInterval(function(){
		time = time + 1;
		document.getElementById('time').innerHTML = String((time%600000)/60000 | 0) + String((time%60000)/6000 | 0) + ":" + String((time%6000)/1000 | 0) + String((time%1000)/100 | 0) + "." + String((time%100)/10 | 0) + time%10;
	},10);
}
function start() {
	refresh();
	document.getElementById('start').removeAttribute('onclick');
}
function stop() {
	clearInterval(tInt);
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
// 倒计时 | TimeCounter
const music = new Audio('./time_up.mp3');
var t = 0;
var cdl = true;
function cdrefresh() {
	cdInt = setInterval(function(){
		if (t > 0) {
			t = t - 10;
			document.getElementById('cd').innerHTML = String((t%6000000)/600000 | 0) + String((t%600000)/60000 | 0) + ":" + String((t%60000)/10000 | 0) + String((t%10000)/1000 | 0);
		} 
		if (t == 0) {
			music.play();
			cdreset();
			clearInterval(cdInt);
		}
	},10);
}
function cdstart() {
	var m = document.getElementById('min').value;
	var n = document.getElementById('second').value;
	if (m >= 0 & m <= 59 & n >= 0 & n <= 59 & m + n != 0) {
		t = m * 60000 + n * 1000;
		cdrefresh();
		document.getElementById('cdstart').removeAttribute('onclick');
	} else {
		alert('请输入范围为0~59的值');
	}
}
function cdstop() {
	clearInterval(cdInt);
	document.getElementById('cdstop').innerHTML = 'Continue';
	document.getElementById('cdstop').setAttribute('onclick', "go_on()");
}
function go_on() {
	cdrefresh();
	document.getElementById('cdstop').innerHTML = 'Stop';
	document.getElementById('cdstop').setAttribute('onclick', "cdstop()");
}
function cdreset() {
	cdstop();
	t = 0;
	document.getElementById('cdstop').innerHTML = 'Stop';
	document.getElementById('cdstop').setAttribute('onclick', "cdstop()");
	document.getElementById('cdstart').setAttribute('onclick', "cdstart()");
	document.getElementById('cd').innerHTML = "00:00";
	document.getElementById('min').value = "";
	document.getElementById('second').value = "";
}
function cdlike() {
	if (cdl) {
		document.getElementById('cdlike').innerHTML = '<i class="heart icon"></i> Like';
		cdl = false;
	} else {
		document.getElementById('cdlike').innerHTML = '<i class="heart outline icon"></i> Like';
		cdl = true;
	}
}