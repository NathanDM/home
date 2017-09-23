'use strict';

import gpio from 'rpi-gpio';

const pinX = 25;
const pinY = 8;

let count = 0;
const max = 3;
const delay = 3000;

// gpio.setup(pin, gpio.DIR_OUT, on);
// gpio.setup(pinX, gpio.DIR_IN, listenX);
gpio.setup(pinY, gpio.DIR_IN, readInput);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function listenX(x){
    console.log('listen X : ', x)
}
async function listenY(y){
    console.log('listen Y : ', y)
}


gpio.setup(pinX, gpio.DIR_IN, gpio.EDGE_BOTH);
gpio.on('change', function(channel, value) {
    console.log('Channel ' + channel + ' value is now ' + value);
});


function readInput() {
    gpio.read(pinY, function(err, value) {
        console.log('The value is ' + value);
    });
}

gpio.setup(7, gpio.DIR_IN, gpio.EDGE_BOTH);

async function on() {
    if (count >= max) {
        gpio.destroy();
        return;
    }

    await sleep(delay);

    console.log('onskfldsmk');
    gpio.write(pin, 1, off);
    count += 1;
}

async function off() {

    await sleep(delay);

    console.log('off');
    gpio.write(pin, 0, on);
}
