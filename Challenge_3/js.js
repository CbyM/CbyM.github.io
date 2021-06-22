"https://api.openweathermap.org/data/2.5/weather?q=madrid&appid=c801b8e04d4a7c46b3517de1825d16f7"

//NASA
const NASA_API = '7UCwi4QHsNf9IFfb8EvacDuT36qfjNCoHsv62b9b';


// Generate map from Leafletjs
function mapAPI(longitude, lattitude){
    var map = L.map('map').setView([longitude, lattitude], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([longitude, lattitude]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
    
       

};




// Openweathermap
function weatherAPI(){
    
    const WEATHERMAP_API = 'c801b8e04d4a7c46b3517de1825d16f7'
    var city = document.getElementById("city-input").value
    var GET_req = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHERMAP_API}`

    fetch(GET_req)
    .then(data => data.json()) //parsing response data into json
    .then(function(data){ // process json data
        console.log("data: " + data)
        var celsius = Math.floor(data.main.temp - 273.15);
        var description = data.weather[0].description;
        var windspeed = data.wind.speed;
        var weatherTag = document.getElementById('weatherTag');
        var longitude = data.coord.lon;
        var lattitude = data.coord.lat;
        weatherTag.innerHTML = celsius + '&#176;C <br>' + description +'<br>'+ windspeed+'m/s <br>';
        
        console.log(longitude, lattitude)
        var lonlat = document.getElementById("lonlat");
        lonlat.innerHTML = longitude + 'Lon<br>' + lattitude + 'Lat<br>';

        mapAPI(lattitude, longitude) // pass city coordinates to map function
    
    }) 
    
    console.log(`User looked at city: ${city}`);
    
}

// Cat picture
function catmanderAPI(){
    var GET_req = 'https://api.thecatapi.com/v1/images/search?size=full'
    fetch(GET_req)
    .then(data => data.json()) //parsing response data into json
    .then(function(data){
    var kitty = '<img src="' + data[0]["url"] + '">'; //grabbing the first image 
    document.getElementById("catmander-img").innerHTML = kitty;
    });
}



// Main 
function run(){
    weatherAPI();
    catmanderAPI();
    mapAPI(lattitude, longitude);

}




run();