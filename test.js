var arDrone = require('ar-drone');
var client = arDrone.createClient();

client.animateLeds('fire',5,2);
