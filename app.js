'use strict';

import gpio from 'rpi-gpio';

const pin = 11;
let count = 0;
const max = 3;
const delay = 3000;

gpio.setup(pin, gpio.DIR_OUT, on);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function on() {
    if (count >= max) {
        gpio.destroy();
        return;
    }

    await sleep(delay);

    console.log('on');
    gpio.write(pin, 1, off);
    count += 1;
}

async function off() {

    await sleep(delay);

    console.log('off');
    gpio.write(pin, 0, on);
}
