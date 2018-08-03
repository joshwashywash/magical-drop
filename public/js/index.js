import Timer from './Timer.js';

const timer = new Timer((dt) => console.log(dt));
timer.start();
