// evaluate Number
function evalNumber() {
    var inputValue = Number(prompt("Enter any five-digit number without commas"))
    if (isNaN(inputValue)){
        alert(inputValue + " is not a number.")
    }else if (inputValue % 2 == 0){
        alert(inputValue + " is an even number.")
    }else{
        alert(inputValue + " is an odd number.")
    }
}
// change title
function changeTitle(){
    let selectedElement = document.getElementById("programCard");
    selectedElement.innerText = "Button Bar!";
}

// alert message
function alertMessage() {
  alert("I am an alert box!");
}

//current minute
function getminutes(){
	var d = new Date();
	var x = document.getElementById("currentminutes");
	x.innerHTML=d.getMinutes();
}

//disapper
function disappearDisplay(){
    document.getElementById("disappear").style.display="none";
}

// map
function mapLoad(){
    //Define the lat lon coordinate
    var latLng = [41.789649, -87.599702];
  
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
  
    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
    streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
  
    var map = L.map('map', {
      center: latLng,
      zoom: 16,
      layers: [streets]
    });
  
    var baseLayers = {
      "Grayscale": grayscale,
      "Streets": streets
    };
  
    L.control.layers(baseLayers).addTo(map);
  
    L.marker(latLng).addTo(map)
    .bindPopup("<b>UChicago<br>Campus</b>").openPopup();
  
  
  
//Click event
var popup = L.popup();
  
function onMapClick(e) {
      popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(map);
    }
    map.on('click', onMapClick);
  }

//Add elements to the html via js
/*function addElements(){
  var valueArray = ['first', 'second', 'third'];
  for (i in valueArray){
    var newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'row');
    newDiv.setAttribute('id', 'div '+i);
    document.getElementById('addElements').appendChild(newDiv);
    newDiv.innerText = valueArray[i];
  };
}*/

// Sort Array
function ParseArray() {
  var inputArray = [], inputCat = ['fruit', 'animal', 'state', 'country'];
  inputCat.forEach((item) => {
    var newInput = prompt(`enter one ${item}`);
    inputArray.push(newInput);
  });
  document.getElementById('outputArray').innerText = `You entered ${inputArray.join(', ')}.
      I sorted them ${inputArray.sort().join(', ')}`;
}
