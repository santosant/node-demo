const EventEmiter = require('events');

class MyEmitter extends EventEmiter {}

const myEmitter = new MyEmitter();
const eventName = 'user:click';

myEmitter.on(eventName, function (click) {
  console.log('a user clicked', click);
});

// myEmitter.emit(eventName, 'clicked at scrollbar');
// myEmitter.emit(eventName, 'no ok');

// let count = 0;
// setInterval(function () {
//   myEmitter.emit(eventName, 'no Ok' + count++);
// }, 1000);

const stdin = process.openStdin();
function main() {
  return new Promise(function (resolve, reject) {
    stdin.addListener('data', function (value) {
      //console.log(`voce digitou: ${value.toString().trim()}`);
      return resolve(value);
    });
  });
}

main().then(function (result) {
  console.log('resultado:', result.toString().trim());
});
