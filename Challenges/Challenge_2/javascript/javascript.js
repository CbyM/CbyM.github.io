function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();

    var sliced = today.toString()
    document.getElementById("date").innerHTML = sliced.slice(0,15) + " " + sliced.slice(24);

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

	hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
	
	hSplit = hours.toString()
	mSplit = minutes.toString()
	sSplit = seconds.toString()
	
    document.getElementById('hour1').innerHTML = hSplit[0];
	document.getElementById('hour2').innerHTML = hSplit[1];
	document.getElementById('minute1').innerHTML = mSplit[0];
	document.getElementById('minute2').innerHTML = mSplit[1];
	document.getElementById('second1').innerHTML = sSplit[0];
	document.getElementById('second2').innerHTML = sSplit[1];


    
    if(hours < 12){
    document.getElementById("am-pm").innerHTML = "AM";
    }else{
        document.getElementById("am-pm").innerHTML = "PM";
    }
	
    t = setTimeout(function () {
        startTime()
    }, 500);
}
startTime();

function changeToEarth(){
    document.body.style.backgroundImage = "url('./img/nature.jpg')"
}
function changeToMars(){
    document.body.style.backgroundImage = "url('./img/mars.jpg')"
}


