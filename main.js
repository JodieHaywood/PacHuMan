var arDrone = require('ar-drone');
var client = arDrone.createClient();
var kp = new window.keypress.Listener();

var s = function set(key) { $('#keys_' + key).text(key); };
var c = function clear(key) { $('#keys_' + key).text(''); };

kp.register_combo({
    "keys": "w",
    "on_keydown":   function () { s('w'); client.front(0.4); },
    "on_keyup":     function () { c('w'); client.front(0); },
});

kp.register_combo({
    "keys": "s",
    "on_keydown":   function () { s('s'); client.back(0.4); },
    "on_keyup":     function () { c('s'); client.back(0); },
});

kp.register_combo({
    "keys": "a",
    "on_keydown":   function () { s('a'); client.left(0.4); },
    "on_keyup":     function () { c('a'); client.left(0); },
});

kp.register_combo({
    "keys": "d",
    "on_keydown":   function () { s('d'); client.right(0.4); },
    "on_keyup":     function () { c('d'); client.right(0); },
});


kp.register_combo({
    "keys": "r",
    "on_keydown":   function () { s('r'); client.up(0.4); },
    "on_keyup":     function () { c('r'); client.up(0); },
});

kp.register_combo({
    "keys": "f",
    "on_keydown":   function () { s('f'); client.down(0.4); },
    "on_keyup":     function () { c('f'); client.down(0); },
});

kp.register_combo({
    "keys": "q",
    "on_keydown":   function () { s('q'); client.clockwise(0.4); },
    "on_keyup":     function () { c('q'); client.clockwise(0); },
});

kp.register_combo({
    "keys": "e",
    "on_keydown":   function () { s('e'); client.counterClockwise(0.4); },
    "on_keyup":     function () { c('e'); client.counterClockwise(0); },
});


kp.register_combo({
    "keys": "space",
    "on_keydown":   function () { s('space'); client.animate('flipAhead', 1000); },
});

kp.register_combo({
    "keys": "t",
    "on_keydown":   function () { client.takeoff(); },
});

kp.register_combo({
    "keys": "l",
    "on_keydown":   function () { client.land(); },
});

