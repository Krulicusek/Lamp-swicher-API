const {Router} = require('express');
const pool = require('../db');
const mqtt = require('mqtt');
const http = require('http');
const fs = require('fs');
const client  = mqtt.connect('mqtt://10.0.0.100:1883')
const router = Router();
router.get('/', (request, response) => {
        response.sendFile('C:\\Users\\Kubii\\grzejnik\\routes\\stronka.html');
    });

router.get('/on', (request, response) => {
    client.publish('lampka', '1');   
    response.sendFile('C:\\Users\\Kubii\\grzejnik\\routes\\stronka.html');   
});
router.get('/off', (request, response) => {
    client.publish('lampka', '0');      
    response.sendFile('C:\\Users\\Kubii\\grzejnik\\routes\\stronka.html');
});
module.exports = router;
