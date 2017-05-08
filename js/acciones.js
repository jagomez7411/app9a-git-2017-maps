// JavaScript Document
$(document).ready(function(e){
//watchID se refier a actual

var watchID=null;
document.addEventListener("deviceready",Dispositivo_Listo,false);

//Cuando esta listo el dispositivo
function Dispositivo_Listo(){
Comienza();
$("#geo").on("tap",function(){
	navigator.geolocation.getCurrentPosition(onSuccess, onError);
});
}

//Empieza la observacion de la aceleracion
function Comienza(){

//Actualiza la aceleracion cada 2 segundos
//
var opciones={frequency:2000};

watchID=navigator.accelerometer.watchAcceleration(Correcto, Error, opciones);

}
//Detiene la observacion de la aceleracion

function Detente(){
if (watchID) {
navigator.accelerometer.clearWatch(watchID);
watchID=null;
}
}
//Correcto:Toma una captura de la aceleracion
function Correcto(acceleration){
var element=document.getElementById('acelerometro');

element.innerHTML='Aceleracion en X: '+acceleration.x+'<br />'+
'Aceleracion en Y: '+acceleration.y+'<br />'+
'Intervalo: '+acceleration.timestamp+'<br />';
}

//eRROR:FALLA al obtener la Aceleracion
function Error(){
alert('Error!');
}
//Exito al localizar


// onSuccess Callback 
    // This method accepts a Position object, which contains the 
    // current GPS coordinates 
    // 
    var onSuccess = function(position) {
        $("#geolocalizacion").html('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };
 
    // onError Callback receives a PositionError object 
    // 
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
 
    
 
});//document ready
 