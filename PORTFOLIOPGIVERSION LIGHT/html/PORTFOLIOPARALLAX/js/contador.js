import {CountUp} from './countUp.js-master/dist/countUp.js';

var count = new CountUp('count', 1000);

if (!count.error) {
      count.start();
    } else {
      console.error(count.error);
    }

