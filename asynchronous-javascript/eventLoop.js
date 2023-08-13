// Asynchronous behind the scenes: The Event Loop

// HEAP - WHERE OBJECT ARE STORED IN MEMORY
// CALL STACK - WHERE CODE IS ACTUALLY EXECUTED
// ONLY ONE THREAD OF EXECUTION. NO MULTITASKING.
// EVENT LOOP - SENDS CALLBACKS FROM QUEUE TO CALL STACK
// CALLBACK QUEUE - READY TO BE EXECUTED CALLBACK FUNCTIONS (COMING FROM EVENTS)

///////////// THE EVENT LOOP IN PRACTICE ///////////

console.log('Test start');
setTimeout(() => console.log('0 sectimer'), 0);
Promise.resolve('Relsoved promise 1').then(res => console.log(res));
console.log('Test end');

///////////// BULIDING A SIMPLE PROMISE /////////////

const lotteryPromise = new Promise(function(resolve, reject) {
  console.log('Lotter draw is happening 💎💎');
  setTimeout(function() {
    if (Math.random() >= 0.5) {
      resolve('You WIN 💰💰💰');
    } else {
      reject(new Error('You lost your money 💰💰💰'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

/////////////// PROMISIFYING SETTIMEOUT ///////////////////

const wait = function(seconds) {
  return new Promise(function(resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds.');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 seconds.'));

wait(1)
  .then(() => {
    console.log('1 second passed.');
    return wait(1);
  })
  .then(() => {
    console.log('2 second passed..');
    return wait(1);
  })
  .then(() => {
    console.log('3 second passed...');
    return wait(1);
  })
  .then(() => console.log('4 second passed....'));

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!!!')).catch(x => console.error(x));
