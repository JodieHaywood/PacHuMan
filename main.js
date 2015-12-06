var arDrone = require('ar-drone');
var client = arDrone.createClient();
var kp = new window.keypress.Listener();

var s = function set(key) { $('#keys_' + key).text(key);};
var c = function clear(key) { $('#keys_' + key).text(''); };
 
var nitro = 0;
var nitroTime = 0;
setInterval(function(){
nitro++;
$('#nitro').text("Nitro: "+nitro+"/250");
if(nitroTime>0){
    nitroTime-=1;
    $('#nitroTime').text("Nitro time: "+(nitroTime/10)+"s");
    s('n');
} else c('n');
},100);


client.animateLeds('fire',5,2);
setInterval(client.animateLeds('fire',2,2),7000);

kp.register_combo({
    "keys": "y",
    "on_keydown":   function () {client.animateLeds('fire',10,2); },
});

kp.register_combo({
    "keys": "w",
    "on_keydown":   function () { client.front(0.2); },
    "on_keyup":     function () {client.front(0); },
});

kp.register_combo({
    "keys": "space",
    "on_keydown":   function () {
     	s('w');
     	if (nitroTime>0){
     	  client.front(0.42);
     	} else if (nitro>250) {
     	   nitroTime=30;
     	   nitro-=250;
     	   client.front(0.42);
     	} else{
     	   client.front(0.2);
     	}
    },
    "on_keyup":     function () {client.front(0); },
});

kp.register_combo({
    "keys": "s",
    "on_keydown":   function () {client.back(0.4); },
    "on_keyup":     function () {client.back(0); },
});

kp.register_combo({
    "keys": "q",
    "on_keydown":   function () {client.left(0.4); },
    "on_keyup":     function () {client.left(0); },
});

kp.register_combo({
    "keys": "e",
    "on_keydown":   function () {client.right(0.4); },
    "on_keyup":     function () {client.right(0); },
});


kp.register_combo({
    "keys": "r",
    "on_keydown":   function () {client.up(0.4); },
    "on_keyup":     function () {client.up(0); },
});

kp.register_combo({
    "keys": "f",
    "on_keydown":   function () {client.down(0.4); },
    "on_keyup":     function () {client.down(0); },
});

kp.register_combo({
    "keys": "d",
    "on_keydown":   function () {client.clockwise(0.4); },
    "on_keyup":     function () {client.clockwise(0); },
});

kp.register_combo({
    "keys": "a",
    "on_keydown":   function () {client.counterClockwise(0.4); },
    "on_keyup":     function () {client.counterClockwise(0); },
});

kp.register_combo({
    "keys": "x",
    "on_keydown":   function () {client.stop(); },
});


kp.register_combo({
    "keys": "p",
    "on_keydown":   function () {client.animate('flipLeft', 1000); },
});


kp.register_combo({
    "keys": "t",
    "on_keydown":   function () { client.takeoff(); },
});

kp.register_combo({
    "keys": "l",
    "on_keydown":   function () { client.land(); },
});

require('ar-drone-png-stream')(client, { port: 8000 });

setTimeout(function() {
  $('#img').attr('src', 'http://localhost:8000');
}, 10000);
