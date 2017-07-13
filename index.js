/**
 * https://blog.risingstack.com/finding-a-memory-leak-in-node-js/
 */

const co = require('co');
const fs = require('fs');
const profiler = require('gc-profiler');
profiler.on('gc', function(info) {
  console.log('gc', info);
});

const stream = fs.createReadStream('./data.txt');
let obj = {};
console.log('One Million Count Test');
console.log('------------------------');
co(function*() {
  let tmp,
    tarr,
    lengthCount = 0,
    redundentCount = 0;
  console.time('1mc');
  while (true) {
    const res = yield Promise.race([
      new Promise(resolve => stream.once('data', resolve)),
      new Promise(resolve => stream.once('end', resolve)),
      new Promise((resolve, reject) => stream.once('error', reject))
    ]);
    if (!res) {
      break;
    }
    stream.removeAllListeners('data');
    stream.removeAllListeners('end');
    stream.removeAllListeners('error');
    tarr = res.toString().split(/\n/i);
    lengthCount += tarr.length;
    tarr.map((n, i) => {
      if (parseInt(n) > 0 && n.match(/^([0-9]+)$/i)) {
        tmp = RegExp.$1;
        if (!obj[tmp]) {
          obj[tmp] = 1;
        } else {
          obj[tmp]++;
        }
      } else {
        //console.log("empty or zero", n);
        redundentCount++;
      //Is that possibile the stream splits 10 to 1 and 0?
      }
    });
  }
  console.log('result:', obj);
  console.log('lengthCount:', lengthCount);
  console.log('redundentCount:', redundentCount);
  console.timeEnd('1mc');
});