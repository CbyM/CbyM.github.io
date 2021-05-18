//Object: Parameters
let shipParameters = {
	fuel:100,
	throttle:1000, //impulse per unit of propellant, m/s.
	speed:10, //measuerd in km/s
	acceleration:8.7, //constant in orbit, no idea in deep sapce
	criticalFailure: false,	
	
	// Object methods
	calculateFuel: function(){
		var pfuel = document.getElementById('fuel');
		var fuelLeft = this.fuel;
		console.log(fuelLeft);
		pfuel.innerHTML = fuelLeft + ' %';
		this.fuel -= 1;
		if(this.fuel === 0){
			var x = document.getElementById('fuel');
			this.criticalFailure = true;
			return this.criticalFailure;
		}
	},
	
	calculateThrottle: function(){
		var pthrottle = document.getElementById('throttle');
		var throttle_var = this.throttle;
		var randomImpulse = Math.floor(Math.random()*throttle_var);
		pthrottle.innerHTML = randomImpulse + ' Isp';
	},

	calculateSpeed: function(){
		var pspeed = document.getElementById('speed');
		var speed_var = this.speed;
		var randomSpeed = Math.floor(Math.random()*speed_var);
		pspeed.innerHTML = (randomSpeed + 5) + ' KM/s';

	},
	calcluateAcceleration: function(){
		var pacceleration = document.getElementById('acceleration');
		pacceleration.innerHTML = this.acceleration + ' m/s2';
	}
}


// Object: Environment
let shipEnvironment = {
	gravity: 9.8,
	distanceTraveled: 323000000, //323 million km
	atmosphere: 101.3, //atmosphere control system pressured measured in kilopascal (kPa)

	calculateGravity: function(){
		var pgravity = document.getElementById('gravity');
		pgravity.innerHTML = this.gravity + " m/s2";
	},

	calucateDistance: function(){
		var pdistance = document.getElementById("distance");
		pdistance.innerHTML = this.distanceTraveled + " km";
		this.distanceTraveled -= 5;
	},

	calculateAtmoshpere: function(){
		var patmosphere = document.getElementById("atmosphere");
		patmosphere.innerHTML = this.atmosphere + " kPa";
	}
};


// Object: Supplies
let shipSupplies = {
	food: [{
		spaghetti: 100,
		cheescake: 100,
		broodjeKaas: 100,
	}],
	water: 543,
	toiletPaper: 100,
	medicalKit: 50,

	calculateFood: function(){
		var pfood = document.getElementById("food");
		for(i = 0; i < this.food.length; i++){
			console.log(this.food[i]);
		};
		
		pfood.innerHTML = this.food;
	},

	calculateWater: function(){
		var pwater = document.getElementById("water");
		pwater.innerHTML = this.water + " Litres";
		this.water -= 1;
	},

	calculateToilet: function(){
		var ptoilet = document.getElementById("toilet");
		ptoilet.innerHTML = this.toiletPaper + " m";
		this.toiletPaper -= 1;

	},

	calculateMedical: function(){
		var pmedical = document.getElementById("medical");
		pmedical.innerHTML = this.medicalKit + " units";
		this.medicalKit -= 1;
	}

}



// Converter: Gravity (For fun, implemented on a popup window)
function gConvert() {
	var earth = document.conv.tb1.value;
	var mars = document.conv.total.value;
	totalR = Math.floor(eval(earth * mars / 9.8)) + " Kg";
	document.getElementById('update').innerHTML = totalR;
};

// Converter: mars miles
function meConvert() {
	var e = document.conv2.tb2.value;
	var m = document.conv2.total2.value;
	totalR = Math.floor(eval(e/m )) + " miles";
	document.getElementById('update2').innerHTML = totalR;
};


// Popup window function for the Metrics Dashboard
var popup = document.getElementById("ConverterPopup");
var btn = document.getElementById("Metrics-Dashboard");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
	popup.style.display = "block";
};

span.onclick = function() {
	popup.style.display = "none";
};





// -----------defining functions----------------

// FUEL
// If fuel is under certain level, raise criticalFilure. If false, all other methods rise a Filure message
function fuel(){
	if(shipParameters.criticalFailure != true){
		shipParameters.calculateFuel();
	}else{
		document.getElementById('fuel').innerHTML = 'CRITICAL FAILURE';
		alert('CALL 911 INTERSTELLAR HELP HOTLINE');
	}
};

function throttle(){	
	if(shipParameters.criticalFailure != true){
		shipParameters.calculateThrottle();
	}else{
		document.getElementById('throttle').innerHTML = 'CRITICAL FAILURE';
		alert('CALL 911 INTERSTELLAR HELP HOTLINE');
	}
};

function speed(){
	if(shipParameters.criticalFailure != true){
		shipParameters.calculateSpeed();
	}else{
		document.getElementById('speed').innerHTML = 'CRITICAL FAILURE';
		alert('CALL 911 INTERSTELLAR HELP HOTLINE');
	}
};

function acceleration(){
	if(shipParameters.criticalFailure != true){
		shipParameters.calcluateAcceleration();
	}else{
		document.getElementById('acceleration').innerHTML = 'CRITICAL FAILURE';
		alert('CALL 911 INTERSTELLAR HELP HOTLINE');
	}
};





















// Works when user presses the Ship Parameters button.
function a(){
	var y = setInterval(function(){
		fuel();
		throttle();
		speed();
		acceleration();
	},1000);
}

// Works when user presses the Ship Environment button.
function b(){
	var y = setInterval(function(){
		shipEnvironment.calculateGravity();
		shipEnvironment.calucateDistance();
		shipEnvironment.calculateAtmoshpere();
	},1000);
};


function c(){
	var y = setInterval(function(){
		shipSupplies.calculateFood();
		shipSupplies.calculateWater();
		shipSupplies.calculateToilet();
		shipSupplies.calculateMedical();
	},1000);
};







